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
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

export default () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-stretch space-y-3 m-3 overflow-hidden">
      <MenuItem icon={<FiBell />} text="Notifications" />
      <hr />
      <Link to="/">
        <MenuItem
          icon={<FiHardDrive />}
          text="Dashboard"
          active={pathname === "/"}
        />
      </Link>

      <Link to="/students">
        <MenuItem
          icon={<FiUsers />}
          text="Students"
          active={pathname === "/students"}
        />
      </Link>

      <Link to="/classes">
        <MenuItem
          icon={<FiGrid />}
          text="Classes"
          active={pathname === "/classes"}
        />
      </Link>
      <MenuItem icon={<FiPackage />} text="Products" />
      <hr />
      <MenuItem icon={<FiCalendar />} text="Calendar" />
      <MenuItem icon={<FiFileMinus />} text="Reports" />
    </div>
  );
};
