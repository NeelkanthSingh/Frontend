import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoutes";
import Homepage from "../pages/Homepage";
import Documents from "../pages/Documents";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<PrivateRoute> <Homepage /> </PrivateRoute>}/>
      <Route path="/docs" element={<Documents />}/>
    </Routes>
  );
};

export default Router;
