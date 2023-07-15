import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Classes from "./Classes";
import ClassDetail from "./ClassDetail";
import StaffsIndex from "./Staffs";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes-detail" element={<ClassDetail />} />
          <Route path="/staffs" element={<StaffsIndex />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
