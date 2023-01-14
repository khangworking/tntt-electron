import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "./Dashboard";
import Students from "./Students";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
