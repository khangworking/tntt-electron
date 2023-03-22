import React from "react";

const DeactiveButton = (props) => {
  const handleClick = () => {
    if (!confirm("Bạn chắc chắn xoá?")) return;
    window.database.deactivateStudent(props.id).then((success) => {
      if (success) {
        if (!!props.onSuccess && props.onSuccess instanceof Function)
          props.onSuccess();
      } else {
        alert("Fail to update");
      }
    });
  };
  return (
    <button className={props.className} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default DeactiveButton;
