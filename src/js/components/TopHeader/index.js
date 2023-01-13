import React from "react";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";
import logo from "../../../assets/logo.jpg";

export default () => {
  return (
    <div className="flex flex-row justify-between items-end space-x-3">
      <div className="flex-auto flex flex-col space-y-1 items-start">
        <Breadcrumb />
        <div className="text-xl font-bold text-gray-700">Dashboard</div>
      </div>
      <div className="flex-none">
        <Search />
      </div>
      <div className="flex-none">
        <img src={logo} className="w-8" />
      </div>
    </div>
  );
};
