import React from "react";
import { BiTrashAlt } from "react-icons/Bi";
import { SlUserFemale, SlUser } from "react-icons/Sl";

export default ({ student }) => {
  return (
    <tr className="hover:bg-gray-100 cursor-pointer">
      <td className="py-2 px-4 text-left">{student.forename}</td>
      <td className="py-2 px-4 text-left">{student.name}</td>
      <td className="py-2 px-4">{student.level.name}</td>
      <td className="py-2 px-4 text-center">
        <span className="inline-block">
          {student.female ? (
            <SlUserFemale className="text-pink-400" />
          ) : (
            <SlUser className="text-blue-400" />
          )}
        </span>
      </td>
    </tr>
  );
};
