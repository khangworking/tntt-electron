import React from "react";
import { FiTrash, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const RowItem = ({ level }) => {
  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4">{level.name}</td>
      <td className="py-2 px-4 text-center">{level.num_of_people}</td>
      <td className="py-2 px-4 text-left">
        {level.managers.map((person) => (
          <div key={`manager-${person.id}`}>
            {person.forename} {person.name} ({person.level.name})
          </div>
        ))}
      </td>
    </tr>
  );
};

export default RowItem;
