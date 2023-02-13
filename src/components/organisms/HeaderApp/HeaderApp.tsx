import React from "react";
import classes from "./HeaderApp.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { useSelector } from "react-redux";

const HeaderApp = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const selector = useSelector((state: any) => state);
  console.log(params);
  return (
    <div className={classes.container}>
      <div>
        {!selector.user.boards ? (
          <Button btnName="Add task" onClick={() => console.log("xd")} />
        ) : null}
        <Button
          btnName="Logout"
          className={classes.logout}
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default HeaderApp;
