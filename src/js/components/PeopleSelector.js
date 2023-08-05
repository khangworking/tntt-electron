import { Field } from "formik";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const PeopleSelector = ({ name, placeholder, onSelected = null }) => {
  const handleOptions = (people) => {
    return people.map((person) => ({ value: person.id, label: person.name }));
  };

  const loadOptions = (inputValue, cb) => {
    window.database
      .findPeople({ term: inputValue })
      .then((rs) => cb(handleOptions(rs)));
  };
  return (
    <Field name={name}>
      {({ field, form }) => (
        <AsyncSelect
          onChange={(option) => {
            form.setFieldValue(name, option.value);
            if (!!onSelected) onSelected(option.value);
          }}
          onBlur={field.onBlur}
          placeholder={placeholder}
          loadOptions={loadOptions}
        />
      )}
    </Field>
  );
};

export default PeopleSelector;
