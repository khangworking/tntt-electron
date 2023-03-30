import { Field } from "formik";
import React from "react";
import Cleave from "cleave.js/react";

const FeastInput = ({ value, handleChange, ...props }) => {
  return (
    <Field>
      {() => (
        <div>
          <Cleave
            {...props}
            id="feast"
            name="feast"
            placeholder="DD/MM"
            onChange={handleChange}
            options={{
              date: true,
              datePattern: ["d", "m"],
              value,
            }}
          />
        </div>
      )}
    </Field>
  );
};

export default FeastInput;
