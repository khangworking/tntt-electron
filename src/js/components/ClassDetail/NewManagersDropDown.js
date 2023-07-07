import React, { useContext } from "react";
import PersonItem from "../RightSide/PersonItem";
import { LevelDetailContext } from "../../context/LevelDetailContext";
import { LevelDetailActions } from "../../constants";

export default ({ innerRef, onSelected }) => {
  const { state, dispatch } = useContext(LevelDetailContext);

  const createLevelManager = (person) => {
    const payload = {
      id: Date.now(),
      level_id: state.level.id,
      person,
      person_id: person.id,
      disabled: true,
      role: "supporter",
    };
    dispatch({ type: LevelDetailActions.addManager, payload });
    onSelected({
      person_id: person.id,
      role: "supporter",
      level_id: state.level.id,
    });
  };

  return (
    <div
      ref={innerRef}
      className={`absolute top-full h-80 mt-2 right-0 rounded-2xl overflow-scroll border bg-white ${
        open ? "block" : "hidden"
      }`}
    >
      {state.managersDropDown.map((person) => (
        <PersonItem
          key={person.id}
          person={person}
          backgroundClasses="hover:bg-gray-200"
          onClick={() => createLevelManager(person)}
          disabled={person.disabled}
        />
      ))}
    </div>
  );
};
