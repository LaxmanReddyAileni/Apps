//  Redux concept using Slice which has actions Selectors Reducers in one JS file All Slices are integrated in Store.js

import { createSlice } from "@reduxjs/toolkit";

//Initialization of State

export const sampleInitialState = () => ({
  value: 0,
});

//reducers //states are mentioned in Slice
export const sampleSlice = createSlice({
  name: "sample",
  initialState: sampleInitialState(),
  reducers: {
    addValue: (state, action) => {
      state.value = action.payload + 1;
    },
    subtractValue: (state, action) => {
      state.value = action.payload - 1;
    },
  },
});

//Actions here  *****
export const { addValue, subtractValue } = sampleSlice.actions;

export const sampleUpdateAdd = (value) => (dispatch) => {
  dispatch(addValue(value));
};
export const sampleUpdateSubtract = (value) => (dispatch) => {
  dispatch(subtractValue(value));
};
//Selectors
export const sampleSelector = (state) => state.sample.value;

export default sampleSlice.reducer;
