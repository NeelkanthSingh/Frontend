import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  // Check if the user is authenticated (you might have your own authentication logic)
  const isAuthenticated = true; // Replace this with your actual authentication check

  return (
    <Route
      element={
        isAuthenticated ? <Component /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default PrivateRoute;