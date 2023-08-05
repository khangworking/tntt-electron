import React, { useContext, useEffect, useState } from "react";
import { StaffsContext } from "../../context/StaffsContext";
import { StaffsActions } from "../../constants";
import { SlUser, SlUserFemale } from "react-icons/Sl";
import { HiChevronLeft, HiChevronRight } from "react-icons/Hi";

const PeopleTable = () => {
  const [page, setPage] = useState(1);
  const { state, dispatch } = useContext(StaffsContext);

  const fetchPeople = async (levels) => {
    const levelIds = levels.map((lv) => lv.id);
    const people = await window.database.findPeople({ levelIds, page });
    dispatch({ type: StaffsActions.fetchData, payload: people });
  };

  useEffect(() => {
    window.database.teacherLevels().then(fetchPeople);
  }, [page]);

  return (
    <div className="flex flex-col h-full space-y-3">
      <div className="relative h-full overflow-auto rounded-md border border-gray-300 flex-auto">
        <table className="absolute top-0 left-0 w-full max-h-full flex-auto">
          <thead className="">
            <tr>
              <th className="text-left py-2 px-4 sticky top-0 bg-gray-200">
                Tên Thánh
              </th>
              <th className="text-left py-2 px-4 sticky top-0 bg-gray-200">
                Họ Tên
              </th>
              <th className="py-2 text-left px-4 sticky top-0 bg-gray-200">
                Cấp
              </th>
              <th className="text-center py-2 px-4 sticky top-0 bg-gray-200">
                Giới tính
              </th>
            </tr>
          </thead>
          <tbody>
            {state.people.map((person) => (
              <tr key={person.id}>
                <td className="py-2 px-4 text-left">{person.forename}</td>
                <td className="py-2 px-4 text-left">{person.name}</td>
                <td className="py-2 px-4">{person.level.name}</td>
                <td className="py-2 px-4 text-center">
                  <span className="inline-block">
                    {person.female ? (
                      <SlUserFemale className="text-pink-400" />
                    ) : (
                      <SlUser className="text-blue-400" />
                    )}
                  </span>
                </td>
              </tr>
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
          disabled={state.people.length < 25}
          onClick={() => setPage((prev) => prev + 1)}
          className="border border-gray-100 p-2 rounded-md text-2xl disabled:bg-gray-100 disabled:text-gray-200"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PeopleTable;
