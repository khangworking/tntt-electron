import React, { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default () => {
  const path = useLocation();

  let address = null;
  if (path.pathname === "/classes-detail") {
    address = (
      <li>
        <span>&#187; </span>
        <Link to="/classes" className="cursor-pointer">
          Danh sách lớp
        </Link>
      </li>
    );
  }

  return (
    <ul className="flex flex-row items-center space-x-1">
      <li>
        <Link to="/" className="cursor-pointer">
          <FiHome />
        </Link>
      </li>
      {address}
    </ul>
  );
};
