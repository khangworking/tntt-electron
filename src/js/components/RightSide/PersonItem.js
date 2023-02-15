import React from "react";
import { SlUser, SlUserFemale } from "react-icons/Sl";

export default ({ person }) => {
  return (
    <div className="flex flex-row items-center space-x-2 hover:bg-gray-300 p-2 rounded-2xl duration-200 cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-white grid place-items-center text-2xl">
        {person.female ? <SlUserFemale /> : <SlUser />}
      </div>
      <div className="flex flex-col">
        <div className="font-bold">{person.name}</div>
        <div className="text-xs text-gray-500 font-bold">{person.phone}</div>
      </div>
    </div>
  );
};
