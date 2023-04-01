import { Field } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BirthdayInput = ({ value, handleChange, ...props }) => {
  const onChange = (date) => {
    handleChange("birthday", date);
  };
  return (
    <Field>
      {() => (
        <ReactDatePicker
          {...props}
          placeholderText="dd/MM/yyyy"
          selected={value}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          maxDate={new Date()}
        />
      )}
    </Field>
  );
};

export default BirthdayInput;
