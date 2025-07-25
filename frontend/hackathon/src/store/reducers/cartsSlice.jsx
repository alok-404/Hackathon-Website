import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadcart: (state, action) => {

      state.carts = action.payload; // Update the state with the fetched users

      
    },
  }, 
});

export const { loadcart } = cartsSlice.actions;

export default cartsSlice.reducer;
