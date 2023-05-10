import React, { MouseEventHandler } from "react";

import classes from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  link?: string;
  children: any;
  onClick?: MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};
export default Button;
