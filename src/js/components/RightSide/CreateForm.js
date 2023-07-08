import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { each, map, reduce } from "lodash";
import Cleave from "cleave.js/react";
import LevelSelector from "../Students/CreateForm/LevelSelector";

const initialValues = {
  forename: "",
  name: "",
  phone: "",
  level_id: "",
  female: false,
  feast: "",
};

const CreateForm = ({ onSuccess }) => {
  let [exception, setException] = useState("");

  const handleSubmit = async (values, actions) => {
    const processValues = { ...values };
    let errors = {};
    each(Object.keys(processValues), (val) => {
      if (
        processValues[val] === "" ||
        processValues[val] === undefined ||
        (typeof processValues[val] === "object" &&
          !Object.keys(processValues[val]).length)
      ) {
        errors[val] = "Không để trống";
      }
      if (val === "level_id" && !!processValues.level_id)
        processValues.level_id = parseInt(processValues.level_id);
    });
    if (!!Object.keys(errors).length) {
      actions.setErrors(errors);
      return;
    }
    const { success, error, validation } = await window.database.createStudent(
      processValues
    );
    if (success) {
      actions.resetForm();
      onSuccess();
    } else if (validation) {
      let errors = reduce(
        map(error.split(","), (err) => err.trim()),
        (acc, err) => {
          const [fieldName, message] = err.split(":");
          acc[fieldName] = message.trim();
          return acc;
        },
        {}
      );
      actions.setErrors(errors);
    } else {
      setException(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting, handleChange, resetForm, values }) => (
        <Form className="flex flex-col space-y-3">
          {!!exception && (
            <div className="w-full block py-1 px-2 bg-red-400 text-white">
              {exception}
            </div>
          )}
          <div>
            <Field
              id="forename"
              name="forename"
              placeholder="Nhập tên Thánh"
              className={`w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
            />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="forename"
            />
          </div>
          <div>
            <Field
              id="name"
              name="name"
              placeholder="Nhập Họ và Tên"
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
            />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="name"
            />
          </div>
          <div className="flex flex-row items-center space-x-1">
            <Field id="female" name="female" type="checkbox" />
            <label
              htmlFor="female"
              className="block font-bold text-sm text-gray-600"
            >
              Nữ
            </label>
          </div>
          <div>
            <Field
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại"
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
            />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="phone"
            />
          </div>
          <div>
            <LevelSelector
              name="level_id"
              as="select"
              blank="Cấp bậc"
              isTeacher="true"
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
            />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="level_id"
            />
          </div>
          <div>
            <Cleave
              name="feast"
              value={values.feast}
              placeholder="Nhập bồn mạng (VD: 25/12)"
              options={{
                date: true,
                datePattern: ["d", "m"],
              }}
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
              onChange={handleChange}
            />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="feast"
            />
          </div>
          <button
            className="bg-indigo-400 text-white py-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait"
            type="submit"
            disabled={isSubmitting}
          >
            Hoàn tất
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateForm;
