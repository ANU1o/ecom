import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Actions
    // updating state, action | action => parameter used to define arguments of addToCart function
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
