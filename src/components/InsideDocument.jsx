import React from "react";
import Header from "./Header";
import TitleTextWrapperCard from "./TitleTextWrapperCard";
import FeatureTextWrapperCard from "./FeatureTextWrapperCard";
import OverflowWrapperCard from "./OverflowWrapperCard";
import OptionFeatureWrapperCard from "./OptionFeatureWrapperCard";

const InsideDocument = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 h-full text-center">
        <div className="w-60 flex flex-col FAF9F6 border-r-2 border-black">
          <FeatureTextWrapperCard>
            <div className="">Copy Public Link</div>
          </FeatureTextWrapperCard>
          <FeatureTextWrapperCard>
            <div className="">Update Document</div>
          </FeatureTextWrapperCard>
          <FeatureTextWrapperCard>
            <div className="">Rename Document</div>
          </FeatureTextWrapperCard>
          <FeatureTextWrapperCard>
            <div className="">Delete Connection</div>
          </FeatureTextWrapperCard>
        </div>
        <div className="flex-1 flex flex-col h-full">
          <div>
            <TitleTextWrapperCard>
              <div className="">Document Name</div>
            </TitleTextWrapperCard>
          </div>
          <div className="flex h-full justify-center items-center">
            <OverflowWrapperCard>
              <div className="m-12">
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Total Visits</div>
                  </OptionFeatureWrapperCard>
                </div>
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Last Updated</div>
                  </OptionFeatureWrapperCard>
                </div>
              </div>
            </OverflowWrapperCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideDocument;
