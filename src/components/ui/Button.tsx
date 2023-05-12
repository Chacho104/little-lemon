import React, { MouseEventHandler } from "react";

import classes from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  link?: string;
  children: any;
  onClick?: MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({ type, link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};
export default Button;
