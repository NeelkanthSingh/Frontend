import React from "react";
import { Route, Navigate } from "react-router-dom";
import { authAtom } from "../store/atoms/auth";
import { useRecoilValue } from "recoil";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useRecoilValue(authAtom);

  return (
    <>
      { isAuthenticated ? ( children ) : ( <Navigate to="/signin" replace /> ) }
    </>  
  );
};

export default PrivateRoute;