import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // Actions
    // updating state, action | action => parameter used to define arguments of addToCart function
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeWishlist: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export default wishlistSlice.reducer;

export const { addToWishlist, removeWishlist } =
  wishlistSlice.actions;
