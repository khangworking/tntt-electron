import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import LevelSelector from "../Students/CreateForm/LevelSelector";
import Cleave from "cleave.js/react";
import { processStudentFormValues } from "../../../../utils";
import { map, reduce } from "lodash";

const initState = {
  name: "",
  forename: "",
  level_id: "",
  feast: "",
  female: false,
  phone: "",
};

let addedTimeout = null;

const NewStaffForm = () => {
  const [exception, setException] = useState(null);
  const [added, setAdded] = useState(false);
  const handleSubmit = (values, actions) => {
    const params = processStudentFormValues(values);
    if (!params.forename) {
      actions.setErrors({ forename: "Xin nhập tên Thánh" });
      actions.setSubmitting(false);
      return;
    }
    if (!params.phone) {
      actions.setErrors({ phone: "Xin nhập số điện thoại" });
      actions.setSubmitting(false);
      return;
    }
    if (!params.level_id) {
      actions.setErrors({ level_id: "Xin chọn cấp bậc" });
      actions.setSubmitting(false);
      return;
    }
    if (!params.feast) {
      actions.setErrors({ feast: "Xin nhập ngày bổn mạng" });
      actions.setSubmitting(false);
      return;
    }

    window.database
      .createPeople(params)
      .then(({ success, error, validation }) => {
        if (success) {
          setAdded(true);
          clearTimeout(addedTimeout);
          addedTimeout = setTimeout(() => setAdded(false), 1000);
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
          console.log(errors);
          actions.setErrors(errors);
          actions.setSubmitting(false);
        } else {
          setException(error);
          actions.setSubmitting(false);
        }
      });
  };

  return (
    <Formik initialValues={initState} onSubmit={handleSubmit}>
      {({ isSubmitting, values, handleChange }) => (
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
              placeholder="Tên Thánh"
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
              placeholder="Họ và Tên"
              className={`w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
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
              placeholder="Số điện thoại"
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
            <LevelSelector isTeacher={true} blank="Chọn cấp" />
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
              placeholder="Bổn mạng"
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
            className="bg-indigo-400 text-white py-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait hover:bg-indigo-500 duration-150"
            type="submit"
            disabled={isSubmitting}
          >
            Hoàn tất
          </button>
          {added && (
            <div className="bg-green-400 text-white rounded-md py-1 px-2 text-center">
              Đã thêm
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default NewStaffForm;
