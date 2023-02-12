import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const boards = useSelector((state: any) => state.user.boards);
  console.log(boards);
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>Logo</div>
      <span>Your Boards</span>
      <ul>
        {boards.map((board: any) => (
          <li key={board.id}>
            <NavLink
              to={`/dashboard/board/${board.id}`}
              className={({ isActive }) =>
                isActive
                  ? `${classes.styledNavLink} ${classes.active}`
                  : `${classes.styledNavLink}`
              }
            >
              {board.boardName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
