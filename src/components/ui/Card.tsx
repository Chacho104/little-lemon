import React from "react";
import classes from "./Card.module.scss";

type CardProps = {
  children: any;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
export default Card;
