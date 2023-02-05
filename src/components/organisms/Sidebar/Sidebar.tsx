import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>Logo</div>
      <span>Your Boards</span>
      <ul>
        <li>
          <NavLink to="/dashboard/1">1</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
