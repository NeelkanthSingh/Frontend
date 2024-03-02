import React from "react";

const DocumentTextWrapperCard = ({ children }) => {
  return (
    <div className="bg-slate-800 text-lg text-[#FAF9F6] p-3 rounded-b-sm border-b-2 border-black">
      {children}
    </div>
  );
};

export default DocumentTextWrapperCard;
