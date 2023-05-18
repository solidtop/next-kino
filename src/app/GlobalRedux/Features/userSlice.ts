import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
export interface UserState {
  loggedIn: boolean;
}

// Define the initial state using that type
const initialState: UserState = {
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const selectValue = (state: RootState) => state.user.loggedIn;

export default userSlice.reducer;
