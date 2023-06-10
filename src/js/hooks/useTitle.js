import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const initialState = "";
  const [title, setTitle] = useState(initialState);
  const { pathname, hash } = useLocation();

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
      case "/classes-detail":
        setTitle("Thông tin lớp");
        const [, ...id] = hash;
        window.database
          .findLevel(id.join(""))
          .then(({ level: { name } }) => setTitle(name));
        break;
    }
  }, [pathname]);

  return title;
};
