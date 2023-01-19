import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "./Dashboard";
import Students from "./Students";
import Classes from "./Classes";
import Spinner from "./Spinner";
const App = () => {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    window.electronAPI.onDatabaseConnected((_event) => {
      setConnected(true);
    });
  }, []);
  if (!connected) {
    return <Spinner />;
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/classes" element={<Classes />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
