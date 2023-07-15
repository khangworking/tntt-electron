import React from "react";
import TopHeader from "../TopHeader";
import { StaffsContextProvider } from "../../context/StaffsContext";

const StaffsIndex = () => {
  return (
    <StaffsContextProvider>
      <div className="flex flex-col items-stretch h-full w-full py-3 pr-3 space-y-2">
        <div className="flex-none">
          <TopHeader />
        </div>
        <div className="flex-auto h-full flex flex-col space-y-3"></div>
      </div>
    </StaffsContextProvider>
  );
};

export default StaffsIndex;
