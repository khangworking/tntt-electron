import React from "react";
import { SlUser, SlUserFemale } from "react-icons/Sl";

export default ({
  person,
  borderClasses,
  backgroundClasses = null,
  widthClass = "",
  heightClass = "",
  size = "",
  subtitle = "",
}) => {
  let wrapperClass = [
    `flex flex-row items-center space-x-2 p-2 rounded-2xl duration-200 cursor-pointer`,
  ];
  if (!!borderClasses) {
    wrapperClass.push(borderClasses);
  }
  if (!!widthClass) {
    wrapperClass.push(widthClass);
  }
  if (!!heightClass) {
    wrapperClass.push(heightClass);
  }
  if (!!backgroundClasses) {
    wrapperClass.push(backgroundClasses);
  }
  wrapperClass = wrapperClass.join(" ");

  let iconClasses = ["rounded-xl bg-white grid place-items-center"];
  let primaryTextClasses = ["font-bold whitespace-nowrap"];
  switch (size) {
    case "lg":
      iconClasses.push("w-16 h-16 text-4xl");
      primaryTextClasses.push("text-lg");
      break;
    case "md":
      iconClasses.push("w-14 h-14 text-3xl");
      primaryTextClasses.push("text-md");
      break;
    default:
      iconClasses.push("w-12 h-12 text-2xl");
      break;
  }
  iconClasses = iconClasses.join(" ");
  primaryTextClasses = primaryTextClasses.join(" ");

  return (
    <div className={wrapperClass}>
      <div className={iconClasses}>
        {person.female ? (
          <SlUserFemale className="text-red-300" />
        ) : (
          <SlUser className="text-blue-300" />
        )}
      </div>
      <div className="flex flex-col">
        {!!subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        <div className={primaryTextClasses}>{person.name}</div>
        {person.phone && (
          <div className="text-xs text-gray-500 font-bold">
            SĐT: {person.phone}
          </div>
        )}
      </div>
    </div>
  );
};
