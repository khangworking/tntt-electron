import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Classes from "./Classes";
import Detail from "./Classes/Detail";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes-detail" element={<Detail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
