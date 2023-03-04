import React, { useContext, useEffect } from "react";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";
import { GrClose } from "react-icons/gr";
import { SlUserFemale, SlUser } from "react-icons/Sl";
import { last } from "lodash";
import moment from "moment";

const StudentSide = () => {
  const { state, dispatch } = useContext(StudentsContext);
  useEffect(() => {
    if (!state.currentStudentId) return;

    window.database.student(state.currentStudentId).then((rs) => {
      console.log(rs);
      dispatch({ type: StudentActions.setCurrent, payload: rs });
    });
  }, [state.currentStudentId]);

  const handleClose = () => {
    dispatch({ type: StudentActions.unsetCurrent });
  };

  if (!!Object.keys(state.currentStudent).length) {
    const student = state.currentStudent;
    return (
      <div className="p-3 bg-gray-100 h-full box-border w-72 flex flex-col items-stretch space-y-2">
        <div className="flex flex-row justify-end">
          <div
            className="rounded-full bg-white/75 p-3 cursor-pointer"
            onClick={handleClose}
          >
            <GrClose />
          </div>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <div className="flex-none">
            <div
              className={`rounded-full border-2 w-16 h-16 grid place-items-center text-3xl bg-white ${
                student.female ? "border-pink-300" : "border-blue-300"
              }`}
            >
              {student.female ? <SlUserFemale /> : <SlUser />}
            </div>
          </div>
          <div className="flex-auto">
            <div className="font-light">{student.forename}</div>
            <div className="font-bold text-2xl">
              {last(student.name.split(" "))}
            </div>
          </div>
        </div>
        <div className="pt-4 flex flex-col space-y-5">
          <div className="flex flex-col">
            <div className="font-thin text-sm">Họ và Tên</div>
            <div className="font-bold text-xl">{student.name}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Tên Thánh</div>
            <div className="font-bold text-xl">{student.forename}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Giới tính</div>
            <div className="font-bold text-xl">
              {student.female ? "Nữ" : "Nam"}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Lớp hiện tại</div>
            <div className="font-bold text-xl">
              {!!student.level_id ? student.level.name : "-"}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Sinh nhật</div>
            <div className="font-bold text-xl">
              {!!student.birthday ? (
                <>
                  {moment(student.birthday).format("DD/MM/YYYY")} (
                  {moment
                    .duration(moment().diff(moment(student.birthday)))
                    .years()}{" "}
                  tuổi)
                </>
              ) : (
                "-"
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Bổn mạng</div>
            <div className="font-bold text-xl">{student.feast || "-"}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Số điện thoại</div>
            <div className="font-bold text-xl">{student.phone || "-"}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-thin text-sm">Phụ huynh</div>
            <div className="font-bold text-xl">-</div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default StudentSide;
