import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/store/BasketSlice";
import { RootState } from "@/store";
import BasketItem from "./BasketItem";

type BastketItemListProps = {};

const BastketItemList: React.FC<BastketItemListProps> = () => {
  const items = useSelector((state: RootState) => state.basket.items);

  const hasItems = items.length > 0;

  const dispatch = useDispatch();

  const cartItemAddHandler = (item: {
    id: string;
    title: string;
    amount: number;
    price: number;
  }) => {
    dispatch(
      addItem({
        item: {
          id: item.id,
          title: item.title,
          price: item.price,
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
  return (
    <>
      <h1>Order Summary</h1>
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
    </>
  );
};
export default BastketItemList;
