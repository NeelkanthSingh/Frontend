import React from "react";
import "../index.css";

const OverflowWrapperCard = ({ children }) => {
  return (
    <div className="shadow-lg border-2 rounded-lg p-3 bg-[#FAF9F6]">{children}</div>
  );
};

export default OverflowWrapperCard;
