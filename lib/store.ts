import { configureStore } from "@reduxjs/toolkit";
import tictacSlice from "./features/tictac/tictacSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tictac: tictacSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
