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
      <MenuItem icon={<FiBell />} text="Thông báo" />
      <hr />
      <Link to="/">
        <MenuItem
          icon={<FiHardDrive />}
          text="Tổng hợp"
          active={pathname === "/"}
        />
      </Link>

      <Link to="/students">
        <MenuItem
          icon={<FiUsers />}
          text="Thiếu nhi"
          active={pathname === "/students"}
        />
      </Link>

      <Link to="/classes">
        <MenuItem
          icon={<FiGrid />}
          text="Lớp/Ngành"
          active={pathname === "/classes"}
        />
      </Link>
      <MenuItem icon={<FiPackage />} text="Sản phẩm" />
      <hr />
      <MenuItem icon={<FiCalendar />} text="Lịch" />
      <MenuItem icon={<FiFileMinus />} text="Báo cáo" />
    </div>
  );
};
