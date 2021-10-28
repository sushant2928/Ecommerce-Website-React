import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isUserLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isUserLoggedIn = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isUserLoggedIn = false;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectIsUserLoggedIn = (state) => state.user.isUserLoggedIn;
export default userSlice.reducer;
