import React, { createContext, useReducer } from "react";
import { StudentActions } from "../constants";

const initializeState = {
  students: [],
  currentStudentId: null,
  currentStudent: {},
  createStudent: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case StudentActions.fetchData:
      return {
        ...state,
        students: action.payload,
      };
    case StudentActions.setCurrentId:
      return {
        ...state,
        currentStudentId: action.id,
        createStudent: false,
      };
    case StudentActions.setCurrent:
      return {
        ...state,
        currentStudent: action.payload,
        createStudent: false,
      };
    case StudentActions.unsetCurrent:
      return {
        ...state,
        currentStudent: {},
        currentStudentId: null,
        createStudent: false,
      };
    case StudentActions.createStudent:
      return {
        ...state,
        createStudent: true,
        currentStudent: {},
        currentStudentId: null,
      };
    default:
      return state;
  }
};

export const StudentsContext = createContext();

export const StudentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <StudentsContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentsContext.Provider>
  );
};
