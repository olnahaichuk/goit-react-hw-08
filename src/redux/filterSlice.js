import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const INITIAL_STATE = {
  contacts: [],
  filterValue: "",
  isLoading: false,
  error: null,
};

export const fetchContactsByQuery = createAsyncThunk(
  "contacts/getAllByQuery",
  async (query, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://66d06abc181d059277de845b.mockapi.io/contacts?search=${query}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsByQuery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContactsByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
