import React, { useContext, useEffect } from "react";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";
import { GrClose } from "react-icons/gr";
import { SlUserFemale, SlUser } from "react-icons/Sl";
import { takeRight } from "lodash";
import moment from "moment";
import DeactiveButton from "./DeactiveButton";
import CreateForm from "./CreateForm";
import ShortStudentInfo from "./ShortStudentInfo";

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

  const onDeactiveSuccess = () => {
    dispatch({ type: StudentActions.unsetCurrent });
  };

  if (!!Object.keys(state.currentStudent).length) {
    const student = state.currentStudent;
    return (
      <div className="p-3 bg-gray-100 h-full box-border w-72 flex flex-col items-stretch space-y-2">
        <div className="flex flex-row justify-end flex-none">
          <div
            className="rounded-full bg-white/75 p-3 cursor-pointer"
            onClick={handleClose}
          >
            <GrClose />
          </div>
        </div>
        <div className="flex-auto">
          <ShortStudentInfo student={student} />
        </div>
        <div>
          {/* <DeactiveButton
            className="py-2 w-full border rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-200"
            id={state.currentStudentId}
            onSuccess={onDeactiveSuccess}
          >
            Xoá
          </DeactiveButton> */}
        </div>
      </div>
    );
  }

  if (state.createStudent) {
    return (
      <div className="p-3 bg-gray-100 h-full box-border w-72 flex flex-col items-stretch space-y-2">
        <div className="flex flex-row justify-end flex-none">
          <div
            className="rounded-full bg-white/75 p-3 cursor-pointer"
            onClick={handleClose}
          >
            <GrClose />
          </div>
        </div>
        <div className="flex-auto">
          <CreateForm />
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default StudentSide;
