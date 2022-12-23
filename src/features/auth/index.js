import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  uid: "",
  loading: true,
  error: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      state.email = "";
      state.name = "";
      state.uid = "";
    },
    loaded: (state) => {
      state.loading = false;
    },
  },
});

export const { login, logout, loaded } = AuthSlice.actions;

export default AuthSlice.reducer;
