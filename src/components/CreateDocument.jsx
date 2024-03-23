import React from "react";
import Header from "./Header";
import OverflowWrapperCard from "./OverflowWrapperCard";

export default CreateDocument = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-full text-center justify-center items-center px-5 lg:px-20 py-10">
        <OverflowWrapperCard className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="font-serif text-center px-6 py-8 lg:px-10 lg:py-12">
            <div className="mb-6 text-lg space-y-4">
              <input
                id="username"
                className="border-2 rounded-md border-green-400 p-3 m-1 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition ease-in-out duration-150 w-full"
                type="text"
                placeholder="Document Name"
              />
              <button className="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-white font-bold py-2 px-6 rounded-md mx-1 my-2 transition ease-in-out duration-150">
                Create Document
              </button>
            </div>

            <p className="text-sm text-center mb-2 text-green-800">
              The document name should be unique
            </p>
          </div>
        </OverflowWrapperCard>
      </div>
    </div>
  );
};
