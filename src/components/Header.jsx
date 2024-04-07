import React from "react";
import LogoHeader from "./Logo/LogoHeader"
import LogoImage from "./Logo/LogoImage";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-0.5 px-5 flex justify-between items-center bg-[#fbfff5] sticky top-0 left-0 right-0 shadow-md">
      <Link className="flex items-center space-x-1 cursor-pointer" to="/">
        <LogoImage />
        <LogoHeader />
      </Link>
    </nav>
  );
};

export default Header;