import React, { useEffect } from "react";

export default (ref, cb) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (!!ref.current && !ref.current.contains(event.target)) {
        if (!!cb) cb();
        else alert("Clicked outside");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
