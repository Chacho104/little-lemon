import React from "react";
import ButtonAlt from "../ui/ButtonAlt";
import classes from "./Basket.module.scss";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { clearBasket } from "@/store/BasketSlice";
import BastketItemList from "../basket/BastketItemList";
import { Field, Form, Formik } from "formik";
import Link from "next/link";

type BasketProps = {
  next: any;
  cutlery: boolean;
  userName: string;
  phoneNumber: string;
  street: string;
  apartment: string;
};

const Basket: React.FC<BasketProps> = (props) => {
  const totalAmount = useSelector(
    (state: RootState) => state.basket.totalAmount
  );

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.basket.items);

  const totalCost = totalAmount.toFixed(2);

  const hasItems = items.length > 0;

  const clearBasketHandler = () => {
    dispatch(clearBasket());
  };

  return (
    <section className={classes.basket}>
      {!hasItems && (
        <div className={classes["empty-basket"]}>
          <h1>Order Summary</h1>
          <p>
            You have not added any food or drink items to your basket. Please go
            to <Link href="/menu">menu</Link> to start filling your basket with
            our delicious portions! Once you have added an item to basket, the
            order summary will appear here.
          </p>
        </div>
      )}
      {hasItems && (
        <Formik
          initialValues={{
            cutlery: props.cutlery,
            userName: props.userName,
            phoneNumber: props.phoneNumber,
            street: props.street,
            apartment: props.apartment,
          }}
          onSubmit={(values) => {
            props.next(values);
          }}
        >
          {() => (
            <Form>
              <ButtonAlt link="/menu" action="Add more" />
              <div>
                <h3>Cutlery</h3>
                <div className={classes.cutlery}>
                  <div className={classes.label}>
                    <label htmlFor="cutlery">
                      Help reduce plastic waste. Only ask for cutlery if you
                      need it.
                    </label>
                  </div>
                  <Field type="checkbox" id="cutlery" name="cutlery" />
                </div>
              </div>
              <BastketItemList />
              <div className={classes.total}>
                <span>Total Amount</span>
                <span className={classes["final-price"]}>${totalCost}</span>
              </div>
              <div className={classes.actions}>
                <div className={classes.close}>
                  <Button type="button" onClick={clearBasketHandler}>
                    Cancel
                  </Button>
                </div>
                <div className={classes.proceed}>
                  <Button type="submit">Order Now</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};
export default Basket;
