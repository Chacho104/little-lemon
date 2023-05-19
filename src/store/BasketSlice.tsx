import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BasketState {
  title: string;
  items: any[];
  totalAmount: number;
  extras: any[];
}

const initialState: BasketState = {
  title: "",
  items: [],
  totalAmount: 0,
  extras: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{
        item: { title: string; price: number; id: string; amount: number };
      }>
    ) => {
      const updatedTotalAmount =
        state.totalAmount +
        action.payload.item.price * action.payload.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload.item);
      }

      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    removeItem: (
      state,
      action: PayloadAction<{
        item: { id: string };
      }>
    ) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.item.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },

    clearBasket: (state) => {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
      state.extras = initialState.extras;
    },
  },
});

export const { addItem, removeItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
