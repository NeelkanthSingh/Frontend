import React from "react";
import Header from "./Header";
import TitleTextWrapperCard from "./Wrappers/TitleTextWrapperCard";
import FeatureTextWrapperCard from "./Wrappers/FeatureTextWrapperCard";
import OverflowWrapperCard from "./Wrappers/OverflowWrapperCard";
import OptionFeatureWrapperCard from "./Wrappers/OptionFeatureWrapperCard";

const InsideProfile = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 h-full text-center">
        <div className="w-60 flex flex-col FAF9F6 border-r-2 border-black">
        <FeatureTextWrapperCard>
            <div className="">Logout</div>
          </FeatureTextWrapperCard>
          <FeatureTextWrapperCard>
            <div className="">Rename User</div>
          </FeatureTextWrapperCard>
          <FeatureTextWrapperCard>
            <div className="">Delete User</div>
          </FeatureTextWrapperCard>
        </div>
        <div className="flex-1 flex flex-col h-full">
          <div>
            <TitleTextWrapperCard>
              <div className="">Profile</div>
            </TitleTextWrapperCard>
          </div>
          <div className="flex h-full justify-center items-center">
            <OverflowWrapperCard>
              <div className="m-12">
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Username</div>
                  </OptionFeatureWrapperCard>
                </div>
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Total Document</div>
                  </OptionFeatureWrapperCard>
                </div>
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Account Created At</div>
                  </OptionFeatureWrapperCard>
                </div>
                <div className="m-6">
                  <OptionFeatureWrapperCard>
                    <div>Total Document Visits</div>
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

export default InsideProfile;
