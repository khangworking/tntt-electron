import React, { createContext, useReducer } from "react";

const initializeState = {
  people: [],
  newPerson: {},
};

const reducer = (state, action) => {
  switch (action.type) {
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
