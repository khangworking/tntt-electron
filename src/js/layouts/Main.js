import React from "react";
import SideBarMenu from "../components/SideBarMenu";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <div className="flex flex-row items-stretch h-screen box-border space-x-4">
      <div className="flex flex-row items-stretch h-full box-border flex-auto">
        {/* Sidebar */}
        <div className="flex-none bg-indigo-500 rounded-2xl m-3">
          <SideBarMenu />
        </div>

        <div className="flex-auto flex flex-col items-stretch space-y-3">
          {/* Main */}
          <div className="flex-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
