import React, { createContext, useReducer } from "react";
import { StaffsActions } from "../constants";

const initializeState = {
  people: [],
  newPerson: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case StaffsActions.fetchData:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};

export const StaffsContext = createContext();

export const StaffsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <StaffsContext.Provider value={{ state, dispatch }}>
      {children}
    </StaffsContext.Provider>
  );
};
