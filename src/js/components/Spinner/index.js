import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col space-y-3">
      <div className="animate-spin text-3xl">
        <AiOutlineLoading3Quarters />
      </div>
      <div className="font-bold text-gray-700">Connecting database</div>
    </div>
  );
};
