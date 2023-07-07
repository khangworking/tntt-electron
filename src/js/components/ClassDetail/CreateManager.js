import React, { useContext, useRef, useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import NewManagersDropDown from "./NewManagersDropDown";
import useOutsideCloser from "../../hooks/useOutsideCloser";
import { LevelDetailContext } from "../../context/LevelDetailContext";
import { LevelDetailActions } from "../../constants";

const CreateManager = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  useOutsideCloser(dropDownRef, () => setOpen(false));
  const { dispatch } = useContext(LevelDetailContext);

  const createManager = (params) => {
    window.database.createManager(params).then((rs) => {
      if (rs.success) {
        dispatch({
          type: LevelDetailActions.persistManager,
          payload: rs.manager,
        });
      } else {
        console.log(rs);
      }
    });
  };

  return (
    <div className="relative w-16 h-full">
      <div
        onClick={() => setOpen(true)}
        className="border-dashed h-full border-gray-300 cursor-pointer grid place-items-center border-2 rounded-2xl text-gray-300 text-2xl"
      >
        <BsPersonPlusFill />
      </div>
      {open && (
        <NewManagersDropDown
          innerRef={dropDownRef}
          onSelected={createManager}
        />
      )}
    </div>
  );
};

export default CreateManager;
