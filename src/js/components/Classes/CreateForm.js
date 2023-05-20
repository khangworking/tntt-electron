import { Field, Form, Formik } from "formik";
import React from "react";

const CreateForm = ({ refresh }) => {
  const handleSubmit = (values, actions) => {
    window.database.createLevel(values).then((rs) => {
      const { success } = rs;
      if (success) {
        actions.resetForm();
        refresh();
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="flex flex-row space-x-1">
          <div>
            <Field
              id="name"
              name="name"
              placeholder="Tên lớp/ngành mới"
              className={`w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="bg-indigo-400 text-white px-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait"
          >
            Tạo
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateForm;
