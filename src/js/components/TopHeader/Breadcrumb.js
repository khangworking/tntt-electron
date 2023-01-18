import React, { useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex flex-col space-y-2 items-start text-gray-600">
      <ul>
        <li>
          <Link to="/" className="cursor-pointer">
            <FiHome />
          </Link>
        </li>
      </ul>
    </div>
  );
};
