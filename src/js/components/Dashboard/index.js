import React, { useEffect, useState } from "react";
import RightSide from "../RightSide";
import TopHeader from "../TopHeader";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    window.database.dashboard().then((rs) => setResult(rs));
  }, []);

  return (
    <div className="flex flex-row items-stretch h-full space-x-3">
      <div className="flex-auto box-border py-3">
        <div className="flex flex-col space-y-3 items-stretch">
          <div className="flex-none">
            <TopHeader />
          </div>
          <div className="flex-auto">
            <div className="flex flex-row space-x-3">
              <div className="w-full md:w-1/4 flex flex-row items-stretch bg-indigo-500 rounded-md text-white">
                <div className="p-4 flex-auto flex flex-col space-y-2">
                  <div className="text-4xl font-extrabold">
                    {result.studentsCount}
                  </div>
                  <div className="font-bold">Thiếu nhi</div>
                </div>
                <Link
                  to="/students"
                  className="flex-none px-3 flex flex-col border rounded-tr-md rounded-br-md border-indigo-400 bg-indigo-400 justify-center border-l border-l-gray-100 cursor-pointer hover:bg-white hover:text-gray-800 duration-150 hover:border"
                >
                  <BsArrowRight />
                </Link>
              </div>
              <div className="p-4 rounded-md bg-purple-500 text-white w-full md:w-1/4 flex flex-col space-y-2">
                <div className="text-4xl font-extrabold">
                  {result.teachersCount}
                </div>
                <div className="font-bold">GLV - HT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none bg-gray-200 box-border p-4 w-72">
        <RightSide />
      </div>
    </div>
  );
};
