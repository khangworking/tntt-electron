import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import { HiChevronRight, HiChevronLeft } from "react-icons/Hi";

export default () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.database.students({ page, per: 25 }).then((rs) => {
      setStudents(rs);
    });
  }, [page]);
  return (
    <div className="flex flex-col space-y-2 items-stretch h-full">
      <div className="flex-none flex flex-row justify-between items-center">
        {/* filter */}
        {/* create button */}
      </div>
      <div className="flex-auto relative h-full">
        <div className="absolute top-0 left-0 w-full h-full overflow-auto">
          <table className="w-full overflow-hidden rounded-xl">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-2 px-4">Tên Thánh</th>
                <th className="text-left py-2 px-4">Họ Tên</th>
                <th className="py-2 text-left px-4">Lớp/Ngành</th>
                <th className="text-center py-2 px-4">Giới tính</th>
                <th className="text-center">Xoá</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <RowItem student={student} key={`student-${student.id}`} />
              ))}
            </tbody>
          </table>
        </div>
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
          disabled={students.length < 25}
          onClick={() => setPage((prev) => prev + 1)}
          className="border border-gray-100 p-2 rounded-md text-2xl disabled:bg-gray-100 disabled:text-gray-200"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};
