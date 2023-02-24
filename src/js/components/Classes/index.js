import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";

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
    <div className="flex flex-col items-stretch h-full w-full">
      <div className="flex-auto relative">
        <div className="absolute top-0 left-0 h-full w-full overflow-auto">
          <table className="w-full overflow-hidden rounded-xl">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 text-left px-4">Tên ngành</th>
                <th>Sĩ số</th>
                <th>GLV - HT</th>
                <th></th>
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
    </div>
  );
};
