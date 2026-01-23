import { configureStore } from "@reduxjs/toolkit";
import { photoReducer } from "./photosSlice";

export const store = configureStore({
  reducer: {
    photos: photoReducer,
  },
});
