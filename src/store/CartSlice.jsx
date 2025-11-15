import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    message: null,
  },
  reducers: {
    addToCart(state, action) {
      const existingCourse = state.items.findIndex(
        (course) => course.name === action.payload.name,
      );

      if (existingCourse === -1) {
        state.items.push(action.payload);
        state.message = "Course successfully added to cart!";
      } else {
        state.message = "This course is already in your cart.";
      }
    },

    removeItem(state, action) {
      const indexItem = state.items.findIndex(
        (item) => item.name === action.payload,
      );
      state.items.splice(indexItem, 1);
    },

    clearMessage(state) {
      state.message = null;
    },
  },
});

export const { addToCart, removeItem, clearMessage } = cartSlice.actions;
export default cartSlice.reducer;
