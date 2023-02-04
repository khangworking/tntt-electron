import { map } from "lodash";
import React from "react";
import PersonItem from "./PersonItem";

export default ({ level, people }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="text-sm text-gray-500 border-b border-gray-400">
        {level.name}
      </div>
      <div className="flex flex-col space-y-3 items-stretch">
        {map(people, (person) => (
          <PersonItem person={person} key={`glv-person-${person.id}`} />
        ))}
      </div>
    </div>
  );
};
