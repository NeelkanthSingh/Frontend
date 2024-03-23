import { Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../components/SignIn";
import Username from "../components/Username";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../components/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/username" element={<PrivateRoute> <Username /> </PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
    </Routes>
  );
};

export default Router;
