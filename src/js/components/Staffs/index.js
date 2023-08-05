import React from "react";
import TopHeader from "../TopHeader";
import { StaffsContextProvider } from "../../context/StaffsContext";
import PeopleTable from "./PeopleTable";
import CreateForm from "./CreateForm";

const StaffsIndex = () => {
  return (
    <StaffsContextProvider>
      <div className="flex flex-col items-stretch h-full w-full py-3 pr-3 space-y-2">
        <div className="flex-none">
          <TopHeader />
        </div>
        <div className="flex-auto h-full flex flex-col md:flex-row space-x-0 space-y-3 md:space-x-3 md:space-y-0">
          <div className="flex-none md:w-1/3">
            <CreateForm />
          </div>
          <div className="flex-auto">
            <PeopleTable />
          </div>
        </div>
      </div>
    </StaffsContextProvider>
  );
};

export default StaffsIndex;
