import React from "react";
import { FormFieldTypes } from "./FormField.types";
import classes from "./FormField.module.scss";

const FormField = React.forwardRef(
  ({ name, label, id, ...rest }: FormFieldTypes, ref: any) => {
    return (
      <>
        <label htmlFor={label.toLowerCase()} className={classes.label}>
          {label}
        </label>
        <input
          name={name}
          {...rest}
          ref={ref}
          id={label.toLowerCase()}
          className={classes.input}
        />
      </>
    );
  },
);

export default FormField;
