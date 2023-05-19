import React from "react";
import { FiTrash, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const RowItem = ({ level }) => {
  const teachers = level.managers.filter(
    (manager) => manager.role === "teacher"
  );
  const supporters = level.managers.filter(
    (manager) => manager.role === "suppoter"
  );

  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4">{level.name}</td>
      <td className="py-2 px-4 text-center">{level.num_of_people}</td>
      <td className="py-2 px-4 text-center">
        {teachers.map((person) => (
          <div key={`manager-${person.id}`}>
            {person.forename} {person.name} ({person.level.name})
          </div>
        ))}
      </td>
      <td className="py-2 px-4 text-left">
        {supporters.map((person) => (
          <div key={`manager-${person.id}`}>
            {person.forename} {person.name} ({person.level.name})
          </div>
        ))}
      </td>
    </tr>
  );
};

export default RowItem;
