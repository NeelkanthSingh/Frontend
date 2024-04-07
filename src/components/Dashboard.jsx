import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#F9F6EE]">
      <Header />
      <div className=" flex-1"></div>
      <Sidebar />
      <Footer />
    </div>
  );
};


export default Dashboard;