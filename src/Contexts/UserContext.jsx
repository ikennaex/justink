import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { baseUrl } from "../baseUrl";

// Create context
const UserContext = createContext();

// Custom hook for usage
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken") || null;
  });

  const isAuthenticated = !!accessToken;

  // Axios instance
  const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true, // important for refresh token cookie
  });

  // Attach token to every request
  api.interceptors.request.use((config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  // Handle 401 (token expired → try refresh)
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const res = await api.post("auth/refresh");
          const newToken = res.data.accessToken;
          setAccessToken(newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } catch (err) {
          console.error("Token refresh failed:", err);
          logout();
        }
      }

      return Promise.reject(error);
    }
  );

  // Fetch profile from backend
  const fetchProfile = async () => {
    try {
      const res = await api.get("auth/profile");
      console.log(res)
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.error("Profile fetch failed:", err);
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  // Fetch safeUser whenever accessToken changes
  useEffect(() => {
    if (accessToken) {
      fetchProfile();
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
  }, [accessToken]);

  // Persist token in localStorage
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  // Sync logout/login across tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "accessToken") {
        setAccessToken(event.newValue);
      }
      if (event.key === "user") {
        setUser(event.newValue ? JSON.parse(event.newValue) : null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Refresh token function
  const refreshAccessToken = async () => {
    try {
      const res = await api.post("auth/refresh");
      const newToken = res.data.accessToken;
      if (newToken) {
        setAccessToken(newToken);
      } else {
        console.warn("No access token returned from refresh endpoint");
        setAccessToken(null);
      }
    } catch (err) {
      console.error("Failed to refresh access token:", err);
      setAccessToken(null);
    }
  };

  // Optional: Periodically check expiry and refresh
  useEffect(() => {
    if (!accessToken) return;

    let decoded;
    try {
      decoded = jwtDecode(accessToken);
    } catch (err) {
      console.error("Error decoding token", err);
      return;
    }

    const now = Date.now() / 1000;
    if (decoded.exp - now < 120) {
      refreshAccessToken();
    }

    const interval = setInterval(() => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const d = jwtDecode(token);
          if (d.exp - Date.now() / 1000 < 120) {
            refreshAccessToken();
          }
        } catch (e) {
          console.error("Error decoding token in interval", e);
        }
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [accessToken]);

  // Logout function
  const logout = async () => {
    try {
      await api.post("auth/logout");
    } catch {}
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  // Context value
  const value = {
    api,
    user,
    setUser,
    accessToken,
    setAccessToken,
    isAuthenticated,
    refreshAccessToken,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
