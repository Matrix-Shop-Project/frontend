import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Cart/cartSlice';

export const storeCart = configureStore({
  reducer: {
    cart: cartReducer
  }
});