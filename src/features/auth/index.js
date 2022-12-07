import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.email = "";
      state.name = "";
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
