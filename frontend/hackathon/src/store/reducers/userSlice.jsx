import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadusers: (state, action) => {
      state.data = action.payload; // Update the state with the fetched users 
    },
    removeUser: (state , action) => {
      state.data = null; // Clear user data on logout
    }
  }, 
});

export const { loadusers , removeUser} = userSlice.actions;

export default userSlice.reducer;
