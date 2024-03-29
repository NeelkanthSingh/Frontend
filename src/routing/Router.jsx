import { Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../components/SignIn";
import Username from "../components/Username";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../components/Dashboard";
import Homepage from "../pages/Homepage";

const Router = () => {
  return (
    <Routes className="">
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/username" element={<PrivateRoute> <Username /> </PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}/>
    </Routes>
  );
};

export default Router;
