import React from "react";
import PersonItem from "../RightSide/PersonItem";

const Students = ({ students }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {students.map((student) => (
        <PersonItem
          key={`student-${student.id}`}
          person={student}
          backgroundClasses="bg-gray-100 hover:bg-gray-200"
          subtitle={student.forename}
        />
      ))}
    </div>
  );
};

export default Students;
