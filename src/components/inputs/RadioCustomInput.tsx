import { Field, FieldHookConfig, useField } from "formik";
import React from "react";
import classes from "./RadioCustomInput.module.scss";

interface ICustomFieldProps {
  children: any;
}

const RadioCustomInput: React.FC<
  FieldHookConfig<string> & ICustomFieldProps
> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <>
      <label className={classes["radio-input"]}>
        <Field type="radio" {...field} {...props} />
        {children}
      </label>
    </>
  );
};
export default RadioCustomInput;
