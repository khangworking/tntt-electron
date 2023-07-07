import React, { useContext, useEffect } from "react";
import { LevelDetailContext } from "../../context/LevelDetailContext";
import { LevelDetailActions } from "../../constants";
import { useLocation } from "react-router-dom";
import Managers from "./Managers";
import Students from "./Students";

export default () => {
  const path = useLocation();
  const { state, dispatch } = useContext(LevelDetailContext);

  useEffect(() => {
    const id = path.hash.slice(1);
    window.database.findLevel(id).then((rs) => {
      const payload = {
        level: rs.level,
        students: rs.students,
        managersDropDown: rs.peopleForSelect,
        managers: rs.level.level_managers,
      };
      console.log(payload);
      dispatch({ type: LevelDetailActions.fetchData, payload });
    });
  }, []);

  return (
    <div className="flex flex-col space-y-3">
      {state.managers && <Managers />}
      <div className="font-bold text-md select-none">Danh sách lớp</div>
      {!!state.students.length && <Students students={state.students} />}
    </div>
  );
};
