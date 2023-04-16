import React, { useContext, useEffect } from "react";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";
import CreateForm from "./CreateForm";
import ShortStudentInfo from "./ShortStudentInfo";
import SideLayout from "./SideLayout";
import FilterForm from "./FilterForm";

const StudentSide = () => {
  const { state, dispatch } = useContext(StudentsContext);
  useEffect(() => {
    if (!state.currentStudentId) return;

    window.database.student(state.currentStudentId).then((rs) => {
      dispatch({ type: StudentActions.setCurrent, payload: rs });
    });
  }, [state.currentStudentId]);

  const handleClose = () => {
    dispatch({ type: StudentActions.unsetCurrent });
  };

  if (!!Object.keys(state.currentStudent).length) {
    const student = state.currentStudent;
    return (
      <SideLayout>
        <ShortStudentInfo student={student} />
      </SideLayout>
    );
  }

  if (state.createStudent) {
    return (
      <SideLayout>
        <CreateForm />
      </SideLayout>
    );
  }

  if (state.filterStudents) {
    return (
      <SideLayout>
        <FilterForm />
      </SideLayout>
    );
  }
  return <div></div>;
};

export default StudentSide;
