import React, { useState } from "react";
import TopHeader from "../TopHeader";
import { StudentsContextProvider } from "../../context/StudentsContext";
import StudentsTable from "./StudentsTable";
import StudentSide from "./StudentSide";

export default () => {
  return (
    <StudentsContextProvider>
      <div className="flex flex-row items-stretch h-full space-x-3">
        <div className="flex-auto flex flex-col space-y-2 items-stretch h-full py-3">
          <div className="flex-none flex flex-row justify-between items-center">
            <TopHeader />
          </div>
          <div className="flex-auto mr-3">
            <StudentsTable />
          </div>
        </div>
        <div className="flex-none">
          <StudentSide />
        </div>
      </div>
    </StudentsContextProvider>
  );
};
