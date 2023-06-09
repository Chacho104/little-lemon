import React from "react";
import classes from "./BasketItem.module.scss";

type BasketItemProps = {
  title: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
};

const BasketItem: React.FC<BasketItemProps> = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onRemove}>
          -
        </button>
        <button type="button" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};
export default BasketItem;
