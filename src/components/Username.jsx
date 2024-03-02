import React from "react";

const Username = () => {
  return (
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
        />
        <button className="border-2 rounded-md border-gray-500 mx-0.5 p-1">
          Create Account
        </button>
      </div>

      <p className="text-xs text-center mb-1">
        New users need to provide a username for convenient access <br /> to
        their documents via URL.
      </p>
    </div>
  );
};

export default Username;
