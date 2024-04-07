import React from "react";

const FeatureTextWrapperCard = ({ children }) => {
  return (
    <div className="bg-gray-600 text-lg text-[#FAF9F6] p-3 rounded-b-sm border-b-2 border-black">
      {children}
    </div>
  );
};

export default FeatureTextWrapperCard;