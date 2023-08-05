import { Field, Form, Formik } from "formik";
import React from "react";
import Select from "react-select";

const levelTypes = [
  { value: "student", label: "Lớp/Ngành" },
  { value: "teacher", label: "Cấp bậc" },
];

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
    <Formik
      initialValues={{ name: "", level_type: "student", sort_order: 1 }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-row space-x-1">
          <div>
            <Field
              id="name"
              name="name"
              placeholder="Tên lớp/ngành mới"
              className={`w-full block h-full px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
            />
          </div>
          <div>
            <Field name="level_type">
              {({ field, form }) => (
                <Select
                  options={levelTypes}
                  value={levelTypes.find((opt) => opt.value === field.value)}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                  onBlur={field.onBlur}
                  classNames={{
                    control: () => "w-52",
                  }}
                />
              )}
            </Field>
          </div>
          <div>
            <Field
              id="sort_order"
              name="sort_order"
              type="number"
              placeholder="Thứ tự ngành"
              className={`w-full block h-full px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600`}
            />
          </div>
          <button
            disabled={isSubmitting}
            className="bg-indigo-400 text-white px-4 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait"
          >
            Tạo
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateForm;
