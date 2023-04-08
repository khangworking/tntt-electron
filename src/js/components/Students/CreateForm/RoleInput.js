import { Field } from "formik";
import React, { useState } from "react";

const RoleInput = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  return (
    <div className="relative">
      <input placeholder={props.placeholder} className={props.className} />
      {!!suggestions.length && (
        <div className="absolute top-full left-0 mt-2 w-full p-3 bg-white border rounded-md"></div>
      )}
    </div>
  );
};

export default RoleInput;
