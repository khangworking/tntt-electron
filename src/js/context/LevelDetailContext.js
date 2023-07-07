import React, { createContext, useReducer } from "react";
import { LevelDetailActions } from "../constants";

const initializeState = {
  managers: [],
  students: [],
  level: {},
  managersDropDown: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case LevelDetailActions.fetchData:
      return {
        ...state,
        managers: action.payload.managers,
        students: action.payload.students,
        level: action.payload.level,
        managersDropDown: action.payload.managersDropDown,
      };
    case LevelDetailActions.addManager:
      return {
        ...state,
        managers: [...state.managers, action.payload],
        managersDropDown: state.managersDropDown.map((item) => {
          if (item.id === action.payload.person.id) {
            return {
              ...item,
              disabled: true,
            };
          }
          return item;
        }),
      };
    case LevelDetailActions.persistManager:
      return {
        ...state,
        managers: state.managers.map((item) => {
          if (item.person_id === action.payload.person_id) {
            return {
              ...item,
              disabled: false,
            };
          }
          return item;
        }),
        managersDropDown: state.managersDropDown.filter((item) => {
          return item.id !== action.payload.person_id;
        }),
      };
    case LevelDetailActions.changeRole:
      return {
        ...state,
        managers: state.managers.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              role: action.payload.role,
            };
          }
          return item;
        }),
      };
    case LevelDetailActions.removeManager:
      return {
        ...state,
        managers: state.managers.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export const LevelDetailContext = createContext();

export const LevelDetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <LevelDetailContext.Provider value={{ state, dispatch }}>
      {children}
    </LevelDetailContext.Provider>
  );
};
