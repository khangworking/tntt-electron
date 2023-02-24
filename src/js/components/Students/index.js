import React, { useEffect, useReducer, useState } from "react";
import RowItem from "./RowItem";
import { HiChevronRight, HiChevronLeft } from "react-icons/Hi";
import TopHeader from "../TopHeader";
import { StudentsContextProvider } from "../../context/StudentsContext";
import StudentsTable from "./StudentsTable";

const initializeState = {
  students: [],
  currentStudent: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchStudents":
      return {
        ...state,
        students: action.payload,
      };
    case "setStudent":
      return {
        ...state,
        currentStudent: action.id,
      };

    default:
      return state;
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initializeState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.database.students({ page, per: 25 }).then((rs) => {
      dispatch({ type: "fetchStudents", payload: rs });
    });
  }, [page]);
  return (
    <StudentsContextProvider>
      <div className="flex flex-col space-y-2 items-stretch h-full py-3">
        <div className="flex-none flex flex-row justify-between items-center">
          <TopHeader />
        </div>
        <div className="flex-auto mr-3">
          <StudentsTable />
        </div>
      </div>
    </StudentsContextProvider>
  );
};
