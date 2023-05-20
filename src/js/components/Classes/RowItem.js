import React from "react";

const RowItem = ({ level }) => {
  const teachers = level.level_managers.filter((lm) => lm.role === "teacher");
  const supporters = level.level_managers.filter(
    (lm) => lm.role === "supporter"
  );
  return (
    <tr className="hover:bg-gray-100">
      <td className="py-2 px-4">{level.name}</td>
      <td className="py-2 px-4 text-center">{level.num_of_people}</td>
      <td className="py-2 px-4 text-center">
        {teachers.map((teacher) => (
          <div key={`level_manager_${teacher.id}`}>{teacher.person.name}</div>
        ))}
      </td>
      <td className="py-2 px-4 text-center">
        {supporters.map((supporter) => (
          <div key={`level_manager_${supporter.id}`}>
            {supporter.person.name}
          </div>
        ))}
      </td>
    </tr>
  );
};

export default RowItem;
