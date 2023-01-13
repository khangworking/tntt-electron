import React from "react";
import PersonItem from "./PersonItem";

export default () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none flex flex-row bg-gray-300 rounded-3xl p-2">
        <div className="flex-auto py-1 px-2 bg-indigo-500 text-white text-sm font-bold cursor-pointer rounded-2xl text-center">
          Teachears
        </div>
        <div className="flex-auto py-1 px-2 bg-transparent text-gray-700 text-sm font-bold cursor-pointer rounded-2xl text-center">
          Feasts
        </div>
      </div>

      <div className="flex-auto mt-3 relative">
        <div className="flex flex-col space-y-3 absolute top-0 left-0 w-full h-full overflow-auto">
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
          <PersonItem />
        </div>
      </div>
    </div>
  );
};
