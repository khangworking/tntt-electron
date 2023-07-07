import React, { useContext } from "react";
import CreateManager from "./CreateManager";
import { LevelDetailContext } from "../../context/LevelDetailContext";
import { PiUserSwitchDuotone } from "react-icons/pi";
import ManagerItem from "./ManagerItem";

const Managers = () => {
  const {
    state: { managers: levelManagers, managersDropDown: peopleForSelect },
  } = useContext(LevelDetailContext);

  const managerItems = levelManagers.map((levelManager) => (
    <ManagerItem
      key={`level-manager-${levelManager.id}`}
      levelManager={levelManager}
    />
  ));

  return (
    <div className="flex flex-row items-stretch space-x-2">
      <div className="flex-auto relative h-[82px]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex flex-row space-x-3 items-stretch overflow-auto">
            {managerItems}
          </div>
        </div>
      </div>
      <div className="flex-none">
        <CreateManager />
      </div>
    </div>
  );
};

export default Managers;
