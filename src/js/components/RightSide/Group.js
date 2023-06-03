import { map } from "lodash";
import React from "react";
import PersonItem from "./PersonItem";

export default ({ level, people, title }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="text-sm text-gray-500 border-b border-gray-400">
        {title}
      </div>
      <div className="flex flex-col space-y-3 items-stretch">
        {map(people, (person) => (
          <PersonItem
            person={person}
            key={`glv-person-${person.id}`}
            backgroundClasses="bg-transparent hover:bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
};
