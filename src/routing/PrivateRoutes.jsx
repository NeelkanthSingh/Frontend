import React from "react";
import { Route, Navigate } from "react-router-dom";
import { authAtom } from "../store/atoms/auth";
import { useRecoilValue } from "recoil";
import { useAuthListener } from "../hooks/useAuthListener";

const PrivateRoute = ({ children }) => {
  useAuthListener();
  const auth = useRecoilValue(authAtom);

  return auth.isAuthenticated ? ( children ) : ( <Navigate to="/signin" replace /> );
};

export default PrivateRoute;