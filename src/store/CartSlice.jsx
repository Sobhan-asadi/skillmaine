import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  message: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const course = action.payload;

      const isAlreadyInCart = state.items.some((item) => item.id === course.id);

      if (isAlreadyInCart) {
        state.message = "This course is already in your cart.";
        return;
      }

      state.items.push(course);
      state.message = "Course successfully added to cart!";
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
      state.message = null;
    },

    clearMessage(state) {
      state.message = null;
    },
  },
});

export const { addToCart, removeItem, clearCart, clearMessage } =
  cartSlice.actions;

export default cartSlice.reducer;
