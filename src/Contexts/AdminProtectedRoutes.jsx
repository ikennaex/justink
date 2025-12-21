import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdminAuth } from "./AdminContext";


const AdminProtectedRoutes = () => {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    // Redirect to rider login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the nested routes
  return <Outlet />;
};

export default AdminProtectedRoutes;
