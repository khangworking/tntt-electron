import { Field } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const LevelSelector = ({ isTeacher, blank }) => {
  const [levels, setLevels] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (isTeacher) {
      window.database.teacherLevels().then((rs) => {
        setLevels(rs);
        setOptions(rs.map((lv) => ({ value: lv.id, label: lv.name })));
      });
    } else {
      window.database.studentLevels().then((rs) => {
        setLevels(rs);
        setOptions(rs.map((lv) => ({ value: lv.id, label: lv.name })));
      });
    }
  }, []);
  return (
    <Field name="level_id">
      {({ field, form }) => (
        <Select
          options={options}
          placeholder={blank}
          value={
            options ? options.find((opt) => opt.value === field.value) : ""
          }
          onChange={(option) => form.setFieldValue(field.name, option.value)}
          onBlur={field.onBlur}
        />
      )}
    </Field>
  );
};

export default LevelSelector;
