import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";

const LevelTable = () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    window.database.allLevels().then((payload) => {
      const { levels } = payload;
      setLevels(levels);
    });
  }, []);
  return (
    <table className="absolute top-0 left-0 w-full max-h-full ">
      <thead className="">
        <tr>
          <th className="bg-gray-200 py-2 text-left px-4 sticky top-0">
            Lớp/Ngành
          </th>
          <th className="bg-gray-200 sticky top-0">Sĩ số</th>
          <th className="bg-gray-200 sticky top-0">Giảng viên</th>
          <th className="bg-gray-200 sticky top-0">Trợ giảng</th>
        </tr>
      </thead>
      <tbody className="bg-gray-50">
        {levels.map((level) => (
          <RowItem key={`level-${level.id}`} level={level} />
        ))}
      </tbody>
    </table>
  );
};

export default LevelTable;
