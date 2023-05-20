import React, { useState } from "react";
import TopHeader from "../TopHeader";
import LevelTable from "./LevelTable";
import CreateForm from "./CreateForm";

export default () => {
  const [key, setKey] = useState(Date.now());

  const refresh = () => setKey(Date.now());

  return (
    <div className="flex flex-col items-stretch h-full w-full py-3 pr-3 space-y-2">
      <div className="flex-none">
        <TopHeader />
      </div>
      <div className="flex-auto h-full flex flex-col space-y-3">
        <div className="flex-none">
          <CreateForm refresh={refresh} />
        </div>
        <div className="flex-auto relative overflow-auto rounded-xl">
          <LevelTable key={key} />
        </div>
      </div>
    </div>
  );
};
