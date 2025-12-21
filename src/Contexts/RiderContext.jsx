import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

const RiderAuthContext = createContext(null);

export const RiderAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("rider_access_token");
  });

  const [rider, setRider] = useState(() => {
    const storedRider = localStorage.getItem("rider_data");
    return storedRider ? JSON.parse(storedRider) : null;
  });

  const isAuthenticated = Boolean(accessToken);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("rider_access_token", accessToken);
    } else {
      localStorage.removeItem("rider_access_token");
    }
  }, [accessToken]);

  /**
   * Sync rider data to localStorage
   */
  useEffect(() => {
    if (rider) {
      localStorage.setItem("rider_data", JSON.stringify(rider));
    } else {
      localStorage.removeItem("rider_data");
    }
  }, [rider]);

  /**
   * Login API call
   * Accepts credentials from login component
   */
  const loginRider = (token, riderData = null) => {
    if (!token) return;

    setAccessToken(token);

    if (riderData) {
      setRider(riderData);
    }
  };

  /**
   * Logout handler
   */
  const logout = () => {
    setAccessToken(null);
    setRider(null);
  };

  /**
   * Helper for authenticated requests
   * Automatically attaches Authorization header
   */
  const api = axios.create({
    baseURL: baseUrl, // optional, remove if you pass full URLs
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("rider_access_token");
      console.log("Rider token being sent:", accessToken);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  /**
   * Context value
   */
  const value = {
    accessToken,
    rider,
    isAuthenticated,
    loginRider,
    logout,
    api,
    setRider,
  };

  return (
    <RiderAuthContext.Provider value={value}>
      {children}
    </RiderAuthContext.Provider>
  );
};

/**
 * Custom hook
 */
export const useRiderAuth = () => {
  const context = useContext(RiderAuthContext);

  if (!context) {
    throw new Error("useRiderAuth must be used within a RiderAuthProvider");
  }

  return context;
};
