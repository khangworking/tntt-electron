import React from "react";
import { FiTrash } from "react-icons/fi";

const RowItem = ({ level }) => {
  const deleteLevel = () => {
    if (!confirm("Bạn muốn xoá?")) return;
    alert("deleted!");
  };
  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4">{level.name}</td>
      <td className="py-2 px-4 text-center">{level.num_of_people}</td>
      <td className="py-2 px-4 text-center"></td>
      <td className="py-2 px-4">
        <div
          className="cursor-pointer flex flex-row justify-center"
          onClick={deleteLevel}
        >
          <FiTrash />
        </div>
      </td>
    </tr>
  );
};

export default RowItem;
