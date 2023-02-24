import React, { useContext, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/Hi";
import { StudentActions } from "../../constants";
import { StudentsContext } from "../../context/StudentsContext";
import RowItem from "./RowItem";

const StudentsTable = () => {
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(StudentsContext);

  useEffect(() => {
    window.database.students({ page, per: 25 }).then((rs) => {
      dispatch({ type: StudentActions.fetchData, payload: rs });
    });
  }, [page]);

  return (
    <div className="flex flex-col items-stretch relative h-full">
      <div className="flex-auto rounded-xl relative h-full overflow-auto">
        <table className="absolute top-0 left-0 w-full h-full ">
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
