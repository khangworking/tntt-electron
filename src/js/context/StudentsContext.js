import React, { createContext, useReducer } from "react";
import { StudentActions } from "../constants";

const initializeState = {
  students: [],
  currentStudent: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case StudentActions.fetchData:
      return {
        ...state,
        students: action.payload,
      };
    case StudentActions.setCurrent:
      return {
        ...state,
        currentStudent: action.id,
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
