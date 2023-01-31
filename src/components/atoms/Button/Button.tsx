import React from "react";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";
const Button = ({ type, btnName, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
