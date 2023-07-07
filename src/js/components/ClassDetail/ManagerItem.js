import React, { useContext } from "react";
import PersonItem from "../RightSide/PersonItem";
import { PiUserSwitchDuotone, PiUserCircleMinusBold } from "react-icons/pi";
import { LevelDetailContext } from "../../context/LevelDetailContext";
import { LevelDetailActions } from "../../constants";

const ManagerItem = ({ levelManager }) => {
  const { dispatch } = useContext(LevelDetailContext);
  const switchRole = () => {
    let newRole;
    if (levelManager.role === "teacher") {
      newRole = "supporter";
    } else {
      newRole = "teacher";
    }

    window.database
      .switchManager({
        id: levelManager.id,
        params: { role: newRole },
      })
      .then((rs) => {
        if (rs.success) {
          dispatch({
            type: LevelDetailActions.changeRole,
            payload: { id: levelManager.id, role: newRole },
          });
        } else {
          alert("Something Wrong");
        }
      });
  };

  const removeManager = () => {
    if (!confirm("Bạn có chắc chắn xoá?")) {
      return;
    }
    window.database.removeManager(levelManager.id).then((rs) => {
      if (rs.success) {
        dispatch({
          type: LevelDetailActions.removeManager,
          id: levelManager.id,
        });
        return;
      }
      alert("Something wrong");
    });
  };

  const sideActions = [
    {
      icon: <PiUserSwitchDuotone />,
      callback: switchRole,
    },
    {
      icon: <PiUserCircleMinusBold />,
      callback: removeManager,
    },
  ];

  return (
    <PersonItem
      key={levelManager.id}
      person={levelManager.person}
      borderClasses={
        levelManager.role === "teacher"
          ? "border border-red-300"
          : "border border-gray-300"
      }
      backgroundClasses={
        levelManager.role === "teacher"
          ? "bg-red-100 hover:bg-red-300"
          : "bg-gray-100 hover:bg-gray-300"
      }
      widthClass="w-auto flex-none"
      size="lg"
      subtitle={levelManager.role === "teacher" ? "Giảng viên" : "Trợ giảng"}
      disabled={levelManager.disabled}
      sideActions={sideActions}
    />
  );
};

export default ManagerItem;
