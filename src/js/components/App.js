import React from "react";
import SideBarMenu from "./SideBarMenu";

const App = () => {
  return (
    <div className="flex flex-row items-stretch h-screen box-border p-4">
      <div className="flex-none bg-indigo-500 rounded-2xl">
        <SideBarMenu />
      </div>
      <div className="flex-auto"></div>
    </div>
  );
};

export default App;
