import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRiderAuth } from "./RiderContext";

const RiderProtectedRoutes = () => {
  const { isAuthenticated } = useRiderAuth();

  if (!isAuthenticated) {
    // Redirect to rider login if not authenticated
    return <Navigate to="/logistics/login" replace />;
  }

  // If authenticated, render the nested routes
  return <Outlet />;
};

export default RiderProtectedRoutes;
