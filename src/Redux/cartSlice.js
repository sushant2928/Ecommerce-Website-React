import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      console.log("index", index);
      let newCartItems = [...state.items];
      if (index >= 0) newCartItems.splice(index, 1);
      state.items = [...newCartItems];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
