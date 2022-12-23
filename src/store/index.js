import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth";
import pageReducer from "../features/page";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
