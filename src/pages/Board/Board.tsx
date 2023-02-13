import React from "react";
import classes from "./Board.module.scss";

type BoardProps = {
  isOpen: boolean;
};

const Board = ({ isOpen }: BoardProps) => {
  console.log(isOpen);
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <span>TO DO</span>
        <div className={classes.task}>
          <span>TITLE</span>
          <span>0 of 3 substasks</span>
          <div>Priority: low</div>
        </div>
      </div>
      <div className={`${classes.column} ${classes.addColumn}`}>
        <div>ADD NEW COLUMN</div>
      </div>
    </div>
  );
};

export default Board;
