import React, { useState } from "react";
import Fomik, { ErrorMessage, Field, Form, Formik } from "formik";
import LevelSelector from "./LevelSelector";
import { each, map, reduce } from "lodash";
import BirthdayInput from "./BirthdayInput";
import Cleave from "cleave.js/react";

const CreateForm = () => {
  const initialValues = {
    forename: "",
    name: "",
    phone: "",
    role_id: "",
    role: {},
    level_id: "",
    female: false,
    feast: "",
    birthday: "",
  };

  let [exception, setException] = useState("");

  const handleSubmit = async (values, actions) => {
    const processValues = { ...values };
    each(Object.keys(processValues), (val) => {
      if (
        processValues[val] === "" ||
        processValues[val] === undefined ||
        (typeof processValues[val] === "object" &&
          !Object.keys(processValues[val]).length)
      ) {
        delete processValues[val];
      }
      if (val === "level_id" && !!processValues.level_id)
        processValues.level_id = parseInt(processValues.level_id);
    });
    const { success, error, validation } = await window.database.createStudent(
      processValues
    );
    if (success) {
      actions.resetForm();
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
      {({ isSubmitting, handleChange, setFieldValue, values }) => (
        <Form className="flex flex-col space-y-3">
          {!!exception && (
            <div className="w-full block py-1 px-2 bg-red-400 text-white">
              {exception}
            </div>
          )}
          <div>
            <label
              htmlFor="forename"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Tên Thánh
            </label>
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
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Họ tên
            </label>
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
            <label
              htmlFor="phone"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Số điện thoại
            </label>
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
            <label
              htmlFor="level_id"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Lớp/Ngành
            </label>
            <LevelSelector blank="Chọn lớp" />
            <ErrorMessage
              render={(msg) => (
                <div className="text-sm text-red-400">{msg}</div>
              )}
              name="level_id"
            />
          </div>
          <div>
            <label
              htmlFor="feast"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Bổn mạng
            </label>
            <Cleave
              name="feast"
              value={values.feast}
              placeholder="DD/MM"
              options={{
                date: true,
                datePattern: ["d", "m"],
              }}
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="feast"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Ngày sinh
            </label>
            <BirthdayInput
              handleChange={setFieldValue}
              value={values.birthday}
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
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
