import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalPrice, findItemIndex } from "../utils";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = findItemIndex(state, action);
      if (index >= 0) {
        let cartItems = [...state.items];
        cartItems[index].quantity += 1;
      } else state.items = [...state.items, { ...action.payload, quantity: 1 }];

      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeFromCart: (state, action) => {
      let cartItems = [...state.items];
      const index = findItemIndex(state, action);
      if (index >= 0) {
        cartItems[index].quantity -= 1;
        if (cartItems[index].quantity === 0) cartItems.splice(index, 1);
      }
      state.items = [...cartItems];
      state.totalPrice = calculateTotalPrice(state.items);
    },
    deleteCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCartItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
