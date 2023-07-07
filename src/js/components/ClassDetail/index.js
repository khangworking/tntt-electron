import React from "react";
import TopHeader from "../TopHeader";
import { LevelDetailContextProvider } from "../../context/LevelDetailContext";
import People from "./People";

const ClassDetail = () => {
  return (
    <LevelDetailContextProvider>
      <div className="flex flex-col items-stretch h-full w-full py-3 pr-3 space-y-2">
        <div className="flex-none">
          <TopHeader />
        </div>
        <div className="flex-auto h-full">
          <People />
        </div>
      </div>
    </LevelDetailContextProvider>
  );
};

export default ClassDetail;
