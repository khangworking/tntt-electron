import { Field } from "formik";
import React, { useEffect, useState } from "react";

const LevelSelector = (props) => {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    window.database.studentLevels().then((rs) => setLevels(rs));
  }, []);
  return (
    <Field {...props}>
      <option value="">Chọn lớp</option>
      {levels.map((lv) => (
        <option key={`level-option-${lv.id}`} value={lv.id}>
          {lv.name}
        </option>
      ))}
    </Field>
  );
};

export default LevelSelector;
