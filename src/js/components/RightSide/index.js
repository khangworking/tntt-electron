import React, { useEffect, useState } from "react";
import { groupBy, map, orderBy, reduce, toPairs } from "lodash";
import Group from "./Group";

export default () => {
  const [groups, setGroups] = useState({});
  const [tab, setTab] = useState("levels");
  const fetchTeachers = () => {
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
  };
  const fetchFeasts = () => {
    window.database.groupFeast().then((rs) => {
      setGroups(rs);
      console.log(rs);
    });
  };
  const title = (key) => (tab === "levels" ? groups[key][0].level.name : key);
  const itemKey = (key) =>
    tab === "levels" ? `group-level-${key}` : `feast-${key}`;
  useEffect(() => {
    if (tab === "levels") fetchTeachers();
    else fetchFeasts();
  }, [tab]);
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none flex flex-row bg-gray-300 rounded-3xl p-2">
        <div
          onClick={() => setTab("levels")}
          className={`flex-auto py-1 px-2 text-sm font-bold cursor-pointer rounded-2xl text-center ${
            tab === "levels"
              ? "bg-indigo-500 text-white"
              : "bg-transparent text-gray-700"
          }`}
        >
          GLV - HT
        </div>
        <div
          onClick={() => setTab("feasts")}
          className={`flex-auto py-1 px-2 text-sm font-bold cursor-pointer rounded-2xl text-center ${
            tab === "feasts"
              ? "bg-indigo-500 text-white"
              : "bg-transparent text-gray-700"
          }`}
        >
          Bổn mạng
        </div>
      </div>

      <div className="flex-auto mt-3 flex flex-col space-y-3">
        <div className="relative flex-auto">
          <div className="flex flex-col space-y-3 absolute top-0 left-0 w-full h-full overflow-auto">
            {map(Object.keys(groups), (key) => (
              <Group
                title={title(key)}
                people={groups[key]}
                key={itemKey(key)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
