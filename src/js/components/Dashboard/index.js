import React from "react";
import RightSide from "../RightSide";
import TopHeader from "../TopHeader";

export default () => {
  return (
    <div className="flex flex-row items-stretch h-full space-x-3">
      <div className="flex-auto box-border py-3">
        <div className="flex flex-col space-y-3 items-stretch">
          <div className="flex-none">
            <TopHeader />
          </div>
          <div className="flex-auto">Dashboard</div>
        </div>
      </div>
      <div className="flex-none bg-gray-200 box-border p-4 w-72">
        <RightSide />
      </div>
    </div>
  );
};
