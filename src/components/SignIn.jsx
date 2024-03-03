import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import OverflowWrapperCard from "./OverflowWrapperCard";

const SignIn = () => {
  // Declaring states
  const [userInfo, setUserInfo] = useState(
    Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : undefined
  );

  const [profileInfo, setProfileInfo] = useState(
    Cookies.get("profileInfo")
      ? JSON.parse(Cookies.get("profileInfo"))
      : undefined
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (profileInfo) {
      axios
        .get(`http://localhost:3000/auth`, {
          params: {
            email: profileInfo.email,
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          const emailValue = profileInfo.email;
          if (data.firstUser === false) {
            navigate("/dashboard", { state: { username: data.username } });
          } else {
            navigate("/username", { state: { email: emailValue } });
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else if (userInfo && userInfo.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo`, {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
            Accept: "application/json",
          },
        })
        .then((response) => {
          const profileInfoString = JSON.stringify(response.data);
          setProfileInfo(response.data);
          Cookies.set("profileInfo", profileInfoString);
        })
        .catch((error) => {
          console.error("Error fetching Google user info:", error);
        });
    }
  }, [userInfo, profileInfo]);

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUserInfo(response);
      Cookies.set("userInfo", JSON.stringify(response));
      console.log("Success");
    },
    onError: (error) => {
      console.log(`Login Failed: ${error}`);
      alert("Login failed. Please try again.");
    },
  });

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
