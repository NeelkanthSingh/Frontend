import React from "react";

const SignIn = () => {
  return (
    <div className="font-serif text-center px-10 pb-5 pt-10">
      <div className="text-4xl mb-7 text-gray-900">Sign In</div>
      <div className="text-xl mb-9">
        Welcome to <span className="text-green-800">VersionVaultHub</span>
      </div>
      <br />
      <div className="flex justify-center mb-9">
        <img
          src="google_signin.svg"
          alt="Sign up with Google"
          style={{ width: "220px", height: "60px" }}
        />
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
  );
};

export default SignIn;
