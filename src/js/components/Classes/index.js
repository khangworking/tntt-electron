import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import TopHeader from "../TopHeader";

export default () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    window.database.allLevels().then((payload) => {
      console.log(payload);
      const { levels } = payload;
      setLevels(levels);
    });
  }, []);

  return (
    <div className="flex flex-col items-stretch h-full w-full p-3 space-y-2">
      <div className="flex-none">
        <TopHeader />
      </div>
      <div className="flex-auto rounded-xl relative h-full overflow-auto">
        <table className="absolute top-0 left-0 w-full max-h-full ">
          <thead className="">
            <tr>
              <th className="bg-gray-200 py-2 text-left px-4 sticky top-0">
                Tên lớp
              </th>
              <th className="bg-gray-200 sticky top-0">Sĩ số</th>
              <th className="bg-gray-200 sticky top-0">Trưởng phụ trách</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            {levels.map((level) => (
              <RowItem key={`level-${level.id}`} level={level} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
