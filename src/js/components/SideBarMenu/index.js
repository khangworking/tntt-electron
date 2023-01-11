import React from "react";
import {
  FiBell,
  FiHardDrive,
  FiUsers,
  FiGrid,
  FiPackage,
} from "react-icons/fi";

export default () => {
  return (
    <div className="flex flex-col items-stretch space-y-3 p-3">
      <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
        <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
          <FiBell />
        </div>
        <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
          Notification
        </div>
      </div>
      <hr />
      <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
        <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
          <FiHardDrive />
        </div>
        <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
          Dashboard
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
        <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
          <FiUsers />
        </div>
        <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
          People
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
        <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
          <FiGrid />
        </div>
        <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
          Classes
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
        <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
          <FiPackage />
        </div>
        <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
          Products
        </div>
      </div>
    </div>
  );
};
