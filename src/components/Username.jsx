import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import OverflowWrapperCard from "./OverflowWrapperCard";
import { useLocation, useNavigate } from "react-router-dom";

const Username = () => {
  const [user, setUser] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const profileInfo = Cookies.get("profileInfo")
      ? JSON.parse(Cookies.get("profileInfo"))
      : undefined;
    if (profileInfo == undefined) {
      navigate("/");
    }else {
      axios
        .get(`http://localhost:3000/auth`, {
          params: {
            email: profileInfo.email,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          const data = response.data;
          if (data.firstUser === false) {
            navigate("/dashboard", { state: { username: data.username } });
          } 
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  function sendUserToDashboard() {
    axios
      .post(
        `http://localhost:3000/auth`,
        {
          username: user,
          email: location.state.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        navigate("/dashboard", { state: { username: user } });
      })
      .catch((error) => {
        console.error("Error sending user data:", error);
      });
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#F9F6EE] ">
      <OverflowWrapperCard>
        <div className="font-serif text-center px-10 py-5">
          <label htmlFor="username" className="block text-center mb-4 text-2xl">
            Enter Username
          </label>
          <div className="mb-9 text-base">
            <input
              id="username"
              className="border-2 rounded-md border-gray-500 p-1 m-0.5 text-center"
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <button
              onClick={sendUserToDashboard}
              className="border-2 rounded-md border-gray-500 mx-0.5 p-1"
            >
              Create Account
            </button>
          </div>

          <p className="text-xs text-center mb-1">
            New users need to provide a username for convenient access <br /> to
            their documents via URL.
          </p>
        </div>
      </OverflowWrapperCard>
    </div>
  );
};

export default Username;
