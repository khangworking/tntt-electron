import React from "react";

export default ({ person }) => {
  return (
    <div className="flex flex-row items-center space-x-2 hover:bg-gray-300 p-2 rounded-2xl duration-200 cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-white"></div>
      <div className="flex flex-col">
        <div className="font-bold">{person.name}</div>
      </div>
    </div>
  );
};
