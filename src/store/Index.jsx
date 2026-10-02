import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";

const CART_STORAGE_KEY = "skillmaine-cart";

function loadCartState() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return undefined;
    }

    const parsedCart = JSON.parse(storedCart);

    if (!Array.isArray(parsedCart)) {
      return undefined;
    }

    return {
      cart: {
        items: parsedCart,
        message: null,
      },
    };
  } catch {
    return undefined;
  }
}

function saveCartState(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage failure should not break the application.
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCartState(),
});

store.subscribe(() => {
  const cartItems = store.getState().cart.items;

  saveCartState(cartItems);
});
