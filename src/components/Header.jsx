import React from "react";

const Header = ({ setUserInfo }) => {
  return (
    <div className="flex font-sans text-black py-1 px-4 justify-between h-14 border-b-2 border-black">
      <div className="flex">
        <img className="w-12" src="/logo.png" alt="" />
        <div className="flex font-bold text-green-800 text-2xl items-center">
          VersionVaultHub
        </div>
      </div>
      <div className="flex align-middle w-14">
        <img className="mix-blend-darken" src="/user.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
