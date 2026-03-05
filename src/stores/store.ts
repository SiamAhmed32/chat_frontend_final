import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./services/mainApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

setupListeners(store.dispatch)

export type  RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
