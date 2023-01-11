import React from "react";

export default ({ text }) => {
  return (
    <div className="flex flex-row items-center space-x-3 rounded-2xl p-2 hover:bg-white group cursor-pointer">
      <div className="text-white font-bold group-hover:text-gray-800">
        {text}
      </div>
    </div>
  );
};
