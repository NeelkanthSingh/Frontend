import React from "react";
import Header from "./Header";
import TitleTextWrapperCard from "./TitleTextWrapperCard";
import FeatureTextWrapperCard from "./FeatureTextWrapperCard";
import DocumentTextWrapperCard from "./DocumentTextWrapperCard";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex text-center h-full">
        <div className="w-60 flex flex-col h-full FAF9F6 border-r-2 border-black">
          <FeatureTextWrapperCard>
            <div className="">Create Document</div>
          </FeatureTextWrapperCard>
        </div>
        <div className="flex-1">
          <TitleTextWrapperCard>
            <div className="">All Documents</div>
          </TitleTextWrapperCard>
          {/* <DocumentTextWrapperCard>
            <div>A Document</div>
          </DocumentTextWrapperCard> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
