import { Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoutes";
import Homepage from "../pages/Homepage";

const Router = () => {
  return (
    <Routes className="">
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<PrivateRoute> <Homepage /> </PrivateRoute>}/>
    </Routes>
  );
};

export default Router;
