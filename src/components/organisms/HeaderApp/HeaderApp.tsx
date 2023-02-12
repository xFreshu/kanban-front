import React from "react";
import classes from "./HeaderApp.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const HeaderApp = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const name = params.pathname.split("/dashboard");
  console.log(params);
  return (
    <div className={classes.container}>
      <span>{name}</span>
      <Button btnName="Add task" onClick={() => console.log("xd")} />
      <Button
        btnName="Logout"
        className={classes.logout}
        onClick={() => navigate("/login")}
      />
    </div>
  );
};

export default HeaderApp;
