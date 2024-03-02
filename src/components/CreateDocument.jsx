import React from "react";
import Header from "./Header";
import TitleTextWrapperCard from "./TitleTextWrapperCard";
import FeatureTextWrapperCard from "./FeatureTextWrapperCard";
import OverflowWrapperCard from "./OverflowWrapperCard";
import OptionFeatureWrapperCard from "./OptionFeatureWrapperCard";

const CreateDocument = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex h-full text-center justify-center items-center">
        <OverflowWrapperCard>
          <div className="font-serif text-center px-10 py-5">
            <div className="mb-4 text-base">
              <input
                id="username"
                className="border-2 rounded-md border-gray-500 p-1 m-0.5 text-center"
                type="text"
                placeholder="Document Name"
              />
              <button className="border-2 rounded-md border-gray-500 mx-0.5 p-1">
                Create Document
              </button>
            </div>

            <p className="text-xs text-center mb-1">
              The document name should be unique
            </p>
          </div>
        </OverflowWrapperCard>
      </div>
    </div>
  );
};

export default CreateDocument;
