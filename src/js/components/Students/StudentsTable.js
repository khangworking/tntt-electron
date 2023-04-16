import React, { useContext, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/Hi";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";
import RowItem from "./RowItem";

const StudentsTable = () => {
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(StudentsContext);

  useEffect(() => {
    window.database
      .students({ page, per: 25, ...state.currentFilter })
      .then((rs) => {
        dispatch({ type: StudentActions.fetchData, payload: rs });
      });
  }, [page]);

  const handleCreateStudent = () => {
    dispatch({ type: StudentActions.createStudent });
  };

  const handleFilterStudents = () => {
    dispatch({ type: StudentActions.filterStudents });
  };

  return (
    <div className="flex flex-col items-stretch relative h-full space-y-3">
      <div className="flex flex-row flex-none justify-between items-center">
        <div className="flex-auto">Tổng: {state.total}</div>
        <div className="flex flex-row flex-none justify-end space-x-3">
          <button
            onClick={handleCreateStudent}
            className="px-5 py-1 border rounded-md bg-indigo-400 text-white hover:ring-2 hover:ring-indigo-300 duration-200"
          >
            Tạo mới
          </button>
          <button
            onClick={handleFilterStudents}
            className="px-5 py-1 border rounded-md hover:ring-2 hover:ring-indigo-300 duration-200"
          >
            Lọc
          </button>
        </div>
      </div>
      <div className="flex-auto rounded-xl relative h-full overflow-auto">
        <table className="absolute top-0 left-0 w-full max-h-full ">
          <thead className="">
            <tr>
              <th className="text-left py-2 px-4 sticky top-0 bg-gray-200">
                Tên Thánh
              </th>
              <th className="text-left py-2 px-4 sticky top-0 bg-gray-200">
                Họ Tên
              </th>
              <th className="py-2 text-left px-4 sticky top-0 bg-gray-200">
                Lớp/Ngành
              </th>
              <th className="text-center py-2 px-4 sticky top-0 bg-gray-200">
                Giới tính
              </th>
            </tr>
          </thead>
          <tbody>
            {state.students.map((student) => (
              <RowItem student={student} key={`student-row-${student.id}`} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex-none flex flex-row justify-between">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
          className="border border-gray-100 p-2 rounded-md text-2xl disabled:bg-gray-100 disabled:text-gray-200"
        >
          <HiChevronLeft />
        </button>
        <button
          disabled={state.students.length < 25}
          onClick={() => setPage((prev) => prev + 1)}
          className="border border-gray-100 p-2 rounded-md text-2xl disabled:bg-gray-100 disabled:text-gray-200"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StudentsTable;
