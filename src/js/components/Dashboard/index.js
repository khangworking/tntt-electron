import React, { useEffect, useState } from "react";
import RightSide from "../RightSide";
import TopHeader from "../TopHeader";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import CountPanel from "./CountPanel";

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
              <CountPanel
                count={result.studentsCount}
                label="Thiếu nhi"
                linkTo="/students"
                bgColorClass="bg-teal-500"
                textColorClass="text-white"
              />
              <CountPanel
                count={result.teachersCount}
                label="GLV - HT"
                linkTo="/staffs"
                bgColorClass="bg-rose-500"
                textColorClass="text-white"
              />
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
