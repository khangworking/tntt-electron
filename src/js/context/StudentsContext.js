import React, { createContext, useReducer } from "react";
import { StudentActions } from "../constants";

const initializeState = {
  students: [],
  total: 0,
  currentStudentId: null,
  currentStudent: {},
  createStudent: false,
  filterStudents: false,
  currentFilter: {
    level_id: "",
    gender: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case StudentActions.fetchData:
      return {
        ...state,
        students: action.payload.students,
        total: action.payload.total,
      };
    case StudentActions.setCurrentId:
      return {
        ...state,
        currentStudentId: action.id,
        createStudent: false,
        filterStudents: false,
      };
    case StudentActions.setCurrent:
      return {
        ...state,
        currentStudent: action.payload,
        createStudent: false,
        filterStudents: false,
      };
    case StudentActions.unsetCurrent:
      return {
        ...state,
        currentStudent: {},
        createStudent: false,
        filterStudents: false,
        currentFilter: {},
      };
    case StudentActions.createStudent:
      return {
        ...state,
        createStudent: true,
        currentStudent: {},
        currentStudentId: null,
        filterStudents: false,
      };
    case StudentActions.filterStudents:
      return {
        ...state,
        createStudent: false,
        currentStudent: {},
        currentStudentId: null,
        filterStudents: true,
      };
    case StudentActions.updateFilter:
      return {
        ...state,
        currentFilter: action.payload,
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
