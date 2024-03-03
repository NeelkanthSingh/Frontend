import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = true; 

  return (
    <Route
      element={
        isAuthenticated ? <Component /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default PrivateRoute;