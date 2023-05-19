import React from "react";

import classes from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  variant?: string;
  link?: string;
  children: any;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  link,
  children,
  onClick,
}) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  if (variant) {
    return (
      <button type={type} onClick={onClick} className={classes.formbtn}>
        {children}
      </button>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
};
export default Button;
