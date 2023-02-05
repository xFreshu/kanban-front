import React from "react";
import classes from "./HeaderApp.module.scss";
import { useLocation } from "react-router-dom";

const HeaderApp = () => {
  const params = useLocation();
  const name = params.pathname.split("/");
  console.log(params);
  return (
    <div className={classes.container}>
      <span>{name}</span>
      <button>add task</button>
      <div>setting</div>
    </div>
  );
};

export default HeaderApp;
