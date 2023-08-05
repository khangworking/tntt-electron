import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import PeopleSelector from "../PeopleSelector";
import LevelSelector from "../Students/CreateForm/LevelSelector";
import Cleave from "cleave.js/react";

const initialValues = {
  person_id: "",
  forename: "",
  phone: "",
  level_id: "",
  feast: "",
};

const ExistsForm = () => {
  const [person, setPerson] = useState(null);
  const handleSubmit = (values, actions) => {
    let processedValues = values;
    delete processedValues["person_id"];
    Object.keys(processedValues).forEach((key) => {
      if (!processedValues[key]) {
        delete processedValues[key];
      }
    });
    window.database
      .updatePerson(person.id, processedValues)
      .then(({ success }) => {
        if (success) {
          actions.resetForm();
        } else {
          alert("Something wrong!");
        }
      });
  };

  const onSelected = (id) => {
    window.database.findPeople({ id }).then((people) => {
      if (!!people.length) {
        setPerson(people[0]);
      }
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, handleChange, values }) => (
        <Form className="flex flex-col space-y-3 items-stretch">
          <PeopleSelector
            name="person_id"
            placeholder="Chọn người"
            onSelected={onSelected}
          />
          {!!person && (
            <div className="border-t pt-3 flex flex-col space-y-3 items-stretch">
              {!person.forename && (
                <Field
                  name="forename"
                  className={`w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
                />
              )}
              {!person.phone && (
                <Field
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  className={`w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
                />
              )}
              {!person.feast && (
                <Cleave
                  name="feast"
                  value={values.feast}
                  placeholder="Bổn mạng"
                  options={{
                    date: true,
                    datePattern: ["d", "m"],
                  }}
                  className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
                  onChange={handleChange}
                />
              )}
              <LevelSelector isTeacher={true} blank="Chọn cấp" />
              <button
                disabled={isSubmitting}
                className="bg-indigo-400 w-full text-white py-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait hover:bg-indigo-500 duration-150"
              >
                Hoàn thành
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ExistsForm;
