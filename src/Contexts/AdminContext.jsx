import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("admin_access_token");
  });

  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin_data");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });

  const isAuthenticated = Boolean(accessToken);

  /**
   * Sync token to localStorage
   */
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("admin_access_token", accessToken);
    } else {
      localStorage.removeItem("admin_access_token");
    }
  }, [accessToken]);

  /**
   * Sync admin data to localStorage
   */
  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin_data", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin_data");
    }
  }, [admin]);

  /**
   * Login handler
   */
  const loginAdmin = (token, adminData = null) => {
    if (!token) return;

    setAccessToken(token);

    if (adminData) {
      setAdmin(adminData);
    }
  };

  /**
   * Logout handler
   */
  const logout = () => {
    setAccessToken(null);
    setAdmin(null);
  };

  /**
   * Axios instance for admin authenticated requests
   */
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("admin_access_token");
      console.log("Admin token being sent:", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
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
    admin,
    isAuthenticated,
    loginAdmin,
    logout,
    api,
    setAdmin,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

/**
 * Custom hook
 */
export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }

  return context;
};
