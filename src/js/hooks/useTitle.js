import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const initialState = "";
  const [title, setTitle] = useState(initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Tổng hợp");
        break;
      case "/students":
        setTitle("Thiếu nhi");
        break;
      case "/classes":
        setTitle("Lớp/Ngành");
        break;
    }
  }, [pathname]);

  return title;
};
