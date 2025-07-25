import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import cartsSlice from "./reducers/cartsSlice";
import productSlice from "./reducers/productSlice";

// Ensure you import userSlice from the correct path
export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productsReducer: productSlice,
    cartsReducer: cartsSlice,
  },
});
