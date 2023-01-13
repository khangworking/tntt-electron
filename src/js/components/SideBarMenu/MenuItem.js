import React from "react";

export default ({ icon, text, active }) => {
  return (
    <div
      className={`flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer ${
        active ? "bg-white" : ""
      }`}
    >
      <div
        className={`p-2 group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300 ${
          active ? "text-gray-800 scale-150 bg-transparent " : "text-white"
        }`}
      >
        {icon}
      </div>
      <div
        className={`font-bold group-hover:text-gray-800 hidden lg:block ${
          active ? "text-gray-800" : "text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
