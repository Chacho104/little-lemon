import React from "react";
import classes from "./CustomInput.module.scss";
import { Field, FieldHookConfig, useField } from "formik";

interface ICustomFieldProps {
  bgcolor?: string;
  label: string | React.JSX.Element;
}

const CustomInput: React.FC<FieldHookConfig<string> & ICustomFieldProps> = ({
  label,
  bgcolor,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.control}>
      <div>
        <label
          className={
            bgcolor === "green" ? classes.whitelabel : classes.coloredlabel
          }
          htmlFor={props.id || props.name}
        >
          {label}
        </label>{" "}
      </div>
      <Field
        className={meta.touched && meta.error ? classes.error : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={classes["error-message"]}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default CustomInput;
