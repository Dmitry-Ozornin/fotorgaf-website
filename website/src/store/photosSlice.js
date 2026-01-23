import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photosJson from "./portfolio.json";

const initialState = {
  albums: [],
};

const photoSlice = createSlice({
  name: "allPhoto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.albums = action.payload.data;
    });
    
  },
});

export const fetchPhoto = createAsyncThunk("photos/fetchPhoto", async () => {
  return new Promise((resolve) => resolve({ data: photosJson }));
});

export const photoReducer = photoSlice.reducer;
