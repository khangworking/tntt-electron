import React, { useEffect, useState } from "react";
import TopHeader from "../TopHeader";
import Managers from "./Managers";
import { useLocation } from "react-router-dom";
import Students from "./Students";

const ClassDetail = () => {
  const [level, setLevel] = useState({});
  const [students, setStudents] = useState([]);
  const path = useLocation();

  useEffect(() => {
    const id = path.hash.slice(1);
    window.database.findLevel(id).then((rs) => {
      setLevel(rs.level);
      setStudents(rs.people);
    });
  }, []);

  return (
    <div className="flex flex-col items-stretch h-full w-full py-3 pr-3 space-y-2">
      <div className="flex-none">
        <TopHeader />
      </div>
      <div className="flex-auto h-full flex flex-col space-y-3">
        {level.level_managers && (
          <Managers level_managers={level.level_managers} />
        )}
        <div className="font-bold text-md">Danh sách lớp</div>
        {!!students.length && <Students students={students} />}
      </div>
    </div>
  );
};

export default ClassDetail;
