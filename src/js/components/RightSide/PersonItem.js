import React, { Children } from "react";
import { SlUser, SlUserFemale } from "react-icons/Sl";
import { IoIosArrowDown } from "react-icons/io";

export default ({
  person,
  borderClasses,
  backgroundClasses = null,
  widthClass = "",
  heightClass = "",
  size = "",
  subtitle = "",
  onClick = null,
  disabled = false,
  sideActions = [],
}) => {
  let wrapperClass = [`flex flex-row rounded-2xl duration-200 overflow-hidden`];
  if (!!borderClasses) {
    wrapperClass.push(borderClasses);
  }
  if (!!widthClass) {
    wrapperClass.push(widthClass);
  }
  if (!!heightClass) {
    wrapperClass.push(heightClass);
  }

  if (disabled) {
    wrapperClass.push("relative cursor-not-allowed");
  } else {
    wrapperClass.push("cursor-pointer");
  }
  wrapperClass = wrapperClass.join(" ");

  let personClass = ["flex-auto flex flex-row items-center space-x-2 p-2"];
  if (!!backgroundClasses) {
    personClass.push(backgroundClasses);
  }
  personClass = personClass.join(" ");

  let iconClasses = ["rounded-xl bg-white grid place-items-center flex-none"];
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

  const onPersonClicked = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (!!onClick) onClick();
  };

  return (
    <div className={wrapperClass}>
      {disabled && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-white"></div>
      )}
      <div onClick={onPersonClicked} className={personClass}>
        <div className={iconClasses}>
          {person.female ? (
            <SlUserFemale className="text-red-300" />
          ) : (
            <SlUser className="text-blue-300" />
          )}
        </div>
        <div className="flex flex-col flex-auto">
          {!!subtitle && (
            <div className="text-xs text-gray-500">{subtitle}</div>
          )}
          <div className={primaryTextClasses}>{person.name}</div>
          {person.phone && (
            <div className="text-xs text-gray-500 font-bold">
              SĐT: {person.phone}
            </div>
          )}
        </div>
      </div>
      {!!sideActions.length && (
        <div className="flex flex-col items-stretch space-y-[1px] bg-gray-200">
          {sideActions.map((action, i) => (
            <div
              onClick={action.callback}
              className="flex-auto bg-white grid place-items-center px-2 hover:bg-gray-200 duration-150"
              key={`person-item-side-action-${i}`}
            >
              {action.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
