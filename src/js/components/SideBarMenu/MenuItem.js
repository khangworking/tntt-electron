import React from "react";

export default ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center space-x-3 rounded-2xl py-2 px-3 hover:bg-white group cursor-pointer">
      <div className="p-2 text-white group-hover:text-gray-800 group-hover:scale-150 bg-indigo-400 rounded-lg group-hover:bg-transparent duration-300">
        {icon}
      </div>
      <div className="text-white font-bold group-hover:text-gray-800 hidden lg:block">
        {text}
      </div>
    </div>
  );
};
