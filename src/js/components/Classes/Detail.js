import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  const location = useLocation();
  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    window.database.findLevel(id).then((rs) => console.log(rs));
  }, []);
  return <div>test</div>;
};

export default Detail;
