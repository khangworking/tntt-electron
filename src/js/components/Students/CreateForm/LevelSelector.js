import { Field } from "formik";
import React, { useEffect, useState } from "react";

const LevelSelector = ({ isTeacher, ...props }) => {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    if (isTeacher) {
      window.database.teacherLevels().then((rs) => setLevels(rs));
    } else {
      window.database.studentLevels().then((rs) => setLevels(rs));
    }
  }, []);
  return (
    <Field {...props}>
      <option value="">{props.blank || "Chọn lớp"}</option>
      {levels.map((lv) => (
        <option key={`level-option-${lv.id}`} value={lv.id}>
          {lv.name}
        </option>
      ))}
    </Field>
  );
};

export default LevelSelector;
