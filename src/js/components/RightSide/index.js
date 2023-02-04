import React, { useEffect, useState } from "react";
import { groupBy, map, orderBy, reduce, toPairs } from "lodash";
import Group from "./Group";

export default () => {
  const [groups, setGroups] = useState({});
  useEffect(() => {
    window.database.teachers().then((rs) => {
      // sort the group's keys by level's sort order
      let groups = orderBy(
        toPairs(groupBy(rs, "level_id")),
        (payload) => payload[1][0].level.sort_order,
        ["desc"]
      );
      // rebuild the groups
      groups = reduce(
        groups,
        (results, [level_id, payloadArray]) => ({
          ...results,
          [`level-${level_id}`]: payloadArray,
        }),
        {}
      );
      setGroups(groups);
    });
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none flex flex-row bg-gray-300 rounded-3xl p-2">
        <div className="flex-auto py-1 px-2 bg-indigo-500 text-white text-sm font-bold cursor-pointer rounded-2xl text-center">
          BQT - GLV
        </div>
        <div className="flex-auto py-1 px-2 bg-transparent text-gray-700 text-sm font-bold cursor-pointer rounded-2xl text-center">
          Bổn mạng
        </div>
      </div>

      <div className="flex-auto mt-3 relative">
        <div className="flex flex-col space-y-3 absolute top-0 left-0 w-full h-full overflow-auto">
          {map(Object.keys(groups), (level_id) => (
            <Group
              level={groups[level_id][0].level}
              people={groups[level_id]}
              key={`group-level-${level_id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
