import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import TitleTextWrapperCard from "./TitleTextWrapperCard";
import FeatureTextWrapperCard from "./FeatureTextWrapperCard";
import DocumentTextWrapperCard from "./DocumentTextWrapperCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#F9F6EE]">
      <Header />
      <div className="flex text-center flex-grow">
        <div className="w-60 flex flex-col border-r-2 border-black">
          <FeatureTextWrapperCard>
            <div className="">Create Document</div>
          </FeatureTextWrapperCard>
        </div>
        <div className="flex-1">
          <TitleTextWrapperCard>
            <div className="">All Documents</div>
          </TitleTextWrapperCard>
          <DocumentTextWrapperCard>
            <div>A Document</div>
          </DocumentTextWrapperCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Dashboard;