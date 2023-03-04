import React, { useContext } from "react";
import { SlUserFemale, SlUser } from "react-icons/Sl";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";

export default ({ student }) => {
  const { state, dispatch } = useContext(StudentsContext);
  const handleClick = () => {
    dispatch({ type: StudentActions.setCurrentId, id: student.id });
  };
  return (
    <tr
      className={`hover:bg-gray-100 cursor-pointer ${
        state.currentStudentId === student.id && "bg-gray-100 font-bold"
      }`}
      onClick={handleClick}
    >
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
