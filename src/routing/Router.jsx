import { Routes, Route } from "react-router-dom";
import App from "../App";
import React from "react";
import SignIn from "../components/SignIn";
import Username from "../components/Username";
import Dashboard from "../components/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/username" element={<Username />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
