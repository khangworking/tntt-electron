import React from "react";
import { FiSearch } from "react-icons/fi";

export default () => {
  return (
    <div className="flex flex-row items-center bg-gray-300 rounded-2xl px-2">
      <button className="bg-transparent border-0 text-gray-400">
        <FiSearch />
      </button>
      <input
        type="text"
        className="border-0 outline-none rounded-2xl bg-transparent px-2 py-1 text-gray-700 text-sm"
        placeholder="Search"
      />
    </div>
  );
};
