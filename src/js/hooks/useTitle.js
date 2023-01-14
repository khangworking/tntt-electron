import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const initialState = "";
  const [title, setTitle] = useState(initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Dashboard");
        break;
      case "/students":
        setTitle("Students");
        break;
    }
  }, [pathname]);

  return title;
};
