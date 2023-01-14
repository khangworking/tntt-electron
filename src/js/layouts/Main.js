import React from "react";
import RightSide from "../components/RightSide";
import SideBarMenu from "../components/SideBarMenu";
import TopHeader from "../components/TopHeader";
import { Outlet } from "react-router-dom";

export default ({ children }) => {
  return (
    <div className="flex flex-row items-stretch h-screen box-border space-x-4">
      <div className="flex flex-row items-stretch space-x-4 h-full box-border p-3 flex-auto">
        {/* Sidebar */}
        <div className="flex-none bg-indigo-500 rounded-2xl">
          <SideBarMenu />
        </div>

        <div className="flex-auto flex flex-col items-stretch space-y-3">
          {/* Top */}
          <div className="flex-none">
            <TopHeader />
          </div>

          {/* Main */}
          <div className="flex-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex-none bg-gray-200 box-border p-4 w-72">
        <RightSide />
      </div>
    </div>
  );
};
