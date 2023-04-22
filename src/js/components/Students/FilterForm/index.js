import { Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import LevelSelector from "../CreateForm/LevelSelector";
import { StudentsContext } from "../../../context/StudentsContext";
import { StudentActions } from "../../../constants";

const FilterForm = () => {
  const { state, dispatch } = useContext(StudentsContext);

  const initialValues = state.currentFilter;

  const handleSubmit = (values, actions) => {
    dispatch({ type: StudentActions.updateFilter, payload: values });
    window.database.students(values).then((rs) => {
      dispatch({ type: StudentActions.fetchData, payload: rs });
      actions.setSubmitting(false);
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="flex flex-col space-y-3 items-stretch">
          <div>
            <label
              htmlFor="level_id"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Lớp/Ngành
            </label>
            <LevelSelector
              name="level_id"
              as="select"
              blank="Tất cả"
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="mb-2 block font-bold text-sm text-gray-600"
            >
              Giới tính
            </label>
            <Field
              as="select"
              id="gender"
              name="gender"
              className="w-full block py-1 px-2 border border-gray-400 outline-none duration-150 rounded-md focus:ring-1 focus:ring-indigo-600"
            >
              <option value="">Tất cả</option>
              <option value="0">Nam</option>
              <option value="1">Nữ</option>
            </Field>
          </div>
          <button
            className="bg-indigo-400 text-white py-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-wait"
            disabled={isSubmitting}
            type="submit"
          >
            Tìm kiếm
          </button>
          <button className="bg-white text-gray-800 py-2 rounded-md disabled:bg-gray-400">
            Xoá tìm kiếm
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
