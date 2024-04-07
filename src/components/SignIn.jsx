import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OverflowWrapperCard from "./OverflowWrapperCard";
import { authAtom } from "../store/atoms/auth";
import { useRecoilValue } from "recoil";
import { useAuthListener } from "../hooks/useAuthListener";

const SignIn = () => {
  useAuthListener();
  const auth = useRecoilValue(authAtom)
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.isAuthenticated){
        navigate("/dashboard");
    }
  }, [auth]);

  const login = () => {
    window.location.href = "http://localhost:3000/auth/google"
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#F9F6EE] ">
      <OverflowWrapperCard>
        <div className="font-serif text-center px-10 pb-5 pt-10">
          <div className="text-3xl mb-7 text-gray-900">Sign In</div>
          <div className="text-xl mb-9">
            Welcome to <span className="text-green-800">VersionVaultHub</span>
          </div>
          <br />
          <div className="flex justify-center mb-9">
            <a className="cursor-pointer" onClick={() => login()}>
              <img
                src="google_signin.svg"
                alt="Sign up with Google"
                style={{ width: "220px", height: "60px" }}
              />
            </a>
          </div>
          <br />
          <div className="text-xs mb-1 font-sans">
            <p>
              Click 'Sign In' to agree to VersionVaultHub's{" "}
              <span className=" underline">
                <a href="/">Terms of Service</a>
              </span>
            </p>
            <p>
              and acknowledge that VersionVaultHub's{" "}
              <span className=" underline">
                <a href="/">Privacy Policy</a>
              </span>{" "}
              applies to you.
            </p>
          </div>
        </div>
  </OverflowWrapperCard>
</div>
  );
};

export default SignIn;
