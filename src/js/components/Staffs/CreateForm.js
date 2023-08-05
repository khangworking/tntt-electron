import React, { useState } from "react";
import NewStaffForm from "./NewStaffForm";
import ExistsForm from "./ExistsForm";

const CreateForm = () => {
  const [tab, setTab] = useState("new");
  return (
    <div className="rounded-md border border-gray-300">
      <div className="font-bold p-2">Thêm nhân sự</div>
      <div className="flex flex-row items-stretch">
        <div
          onClick={() => setTab("new")}
          className={`flex-auto py-1 cursor-pointer text-center duration-200 ${
            tab === "new" ? "bg-indigo-500 text-white" : "hover:bg-indigo-100"
          }`}
        >
          Người mới
        </div>
        <div
          onClick={() => setTab("exists")}
          className={`flex-auto py-1 cursor-pointer text-center duration-200 ${
            tab === "exists"
              ? "bg-indigo-500 text-white"
              : "hover:bg-indigo-100"
          }`}
        >
          Thiếu nhi
        </div>
      </div>
      <div className="p-2">
        {tab === "new" && <NewStaffForm />}
        {tab === "exists" && <ExistsForm />}
      </div>
    </div>
  );
};

export default CreateForm;
