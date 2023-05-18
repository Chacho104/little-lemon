import React from "react";
import ButtonAlt from "../ui/ButtonAlt";
import classes from "./Basket.module.scss";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import BasketItem from "./BasketItem";
import { addItem, clearBasket, removeItem } from "@/store/BasketSlice";

const Basket: React.FC = () => {
  const totalAmount = useSelector(
    (state: RootState) => state.basket.totalAmount
  );

  const totalCost = totalAmount.toFixed(2);

  const items = useSelector((state: RootState) => state.basket.items);

  const dispatch = useDispatch();

  const hasItems = items.length > 0;

  const cartItemAddHandler = (item: any) => {
    dispatch(
      addItem({
        item: {
          ...item,
          amount: 1,
        },
      })
    );
  };

  const cartItemRemoveHandler = (id: string) => {
    dispatch(
      removeItem({
        item: {
          id: id,
        },
      })
    );
  };

  const clearBasketHandler = () => {
    dispatch(clearBasket());
  };

  const basketItems = (
    <ul>
      {items.map((item) => (
        <BasketItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <section className={classes.basket}>
      <div>{hasItems && <ButtonAlt link="/menu" action="Add more" />}</div>
      {hasItems && (
        <div>
          <h3>Cutlery</h3>
          <div className={classes.cutlery}>
            <div className={classes.label}>
              <label htmlFor="cutlery">
                Help reduce plastic waste. Only ask for cutlery if you need it.
              </label>
            </div>
            <input type="checkbox" id="cutlery" name="cutlery" />
          </div>
        </div>
      )}
      {hasItems && <h1>Order Summary</h1>}
      <div className={classes["basket-items"]}>{basketItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes["final-price"]}>${totalCost}</span>
      </div>
      {hasItems && (
        <div className={classes.actions}>
          <div className={classes.close}>
            <Button onClick={clearBasketHandler}>Cancel</Button>
          </div>
          <div className={classes.proceed}>
            <Button>Order</Button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Basket;
