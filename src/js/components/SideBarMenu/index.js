import React from "react";
import {
  FiBell,
  FiHardDrive,
  FiUsers,
  FiGrid,
  FiPackage,
  FiCalendar,
  FiFileMinus,
} from "react-icons/fi";
import MenuItem from "./MenuItem";

export default () => {
  return (
    <div className="flex flex-col items-stretch space-y-3 m-3 overflow-hidden">
      <MenuItem icon={<FiBell />} text="Notification" />
      <hr />
      <MenuItem icon={<FiHardDrive />} text="Dashboard" />
      <MenuItem icon={<FiUsers />} text="Poeple" />
      <MenuItem icon={<FiGrid />} text="Classes" />
      <MenuItem icon={<FiPackage />} text="Products" />
      <hr />
      <MenuItem icon={<FiCalendar />} text="Calendar" />
      <MenuItem icon={<FiFileMinus />} text="Report" />
    </div>
  );
};
