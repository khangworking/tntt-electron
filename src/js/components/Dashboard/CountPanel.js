import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CountPanel = ({
  count,
  label,
  linkTo = null,
  bgColorClass,
  textColorClass,
}) => {
  return (
    <div
      className={`w-full md:w-1/4 flex flex-row items-stretch  rounded-md ${bgColorClass} ${textColorClass}`}
    >
      <div className="p-4 flex-auto flex flex-col space-y-2">
        <div className="text-4xl font-extrabold">{count}</div>
        <div className="font-bold">{label}</div>
      </div>
      {!!linkTo && (
        <Link
          to={linkTo}
          className={`flex-none px-3 flex flex-col rounded-tr-md rounded-br-md justify-center cursor-pointer duration-150`}
        >
          <BsArrowRight />
        </Link>
      )}
    </div>
  );
};

export default CountPanel;
