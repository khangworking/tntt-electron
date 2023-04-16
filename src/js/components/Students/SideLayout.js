import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { StudentsContext } from "../../context/StudentsContext";
import { StudentActions } from "../../constants";

const SideLayout = ({ children }) => {
  const { state, dispatch } = useContext(StudentsContext);
  const handleClose = () => {
    dispatch({ type: StudentActions.unsetCurrent });
  };

  return (
    <div className="p-3 bg-gray-100 h-full box-border w-72 flex flex-col items-stretch space-y-2">
      <div className="flex flex-row justify-end flex-none">
        <div
          className="rounded-full bg-white/75 p-3 cursor-pointer"
          onClick={handleClose}
        >
          <GrClose />
        </div>
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};

export default SideLayout;
