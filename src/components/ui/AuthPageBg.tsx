import React from "react";
import classes from "./AuthPageBg.module.scss";

type AuthPageBgProps = {
  children: any;
};

const AuthPageBg: React.FC<AuthPageBgProps> = ({ children }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <section className={classes.content}>{children}</section>
    </div>
  );
};
export default AuthPageBg;
