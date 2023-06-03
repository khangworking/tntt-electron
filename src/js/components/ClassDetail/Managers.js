import React, { useEffect } from "react";
import PersonItem from "../RightSide/PersonItem";

const Managers = ({ level_managers }) => {
  return (
    <div className="flex flex-row space-x-3 items-stretch">
      {level_managers.map((level_manager) => (
        <PersonItem
          key={level_manager.id}
          person={level_manager.person}
          borderClasses={
            level_manager.role === "teacher"
              ? "border border-red-300"
              : "border border-gray-300"
          }
          backgroundClasses={
            level_manager.role === "teacher"
              ? "bg-red-100 hover:bg-red-300"
              : "bg-gray-100 hover:bg-gray-300"
          }
          widthClass="w-60"
          size="lg"
          subtitle={
            level_manager.role === "teacher" ? "Giảng viên" : "Trợ giảng"
          }
        />
      ))}
    </div>
  );
};

export default Managers;
