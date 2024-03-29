import React from "react";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";
import logo from "../../../assets/logo.jpg";
import useTitle from "../../hooks/useTitle";

export default () => {
  const title = useTitle();
  return (
    <div className="flex flex-row justify-between items-end space-x-3">
      <div className="flex-auto flex flex-col space-y-1 items-start">
        <Breadcrumb />
        <div className="text-4xl font-bold text-gray-700">{title}</div>
      </div>
      <div className="flex-none">{/* <Search /> */}</div>
    </div>
  );
};
