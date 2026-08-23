import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  val: false, // or some initial value
};

const multipleSlice = createSlice({
  name: "multiple",
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.val = !state.val;

      console.log(state.val)
    },
  },
});

export const multipleReduce= multipleSlice.reducer;
export const { toggleSwitch } = multipleSlice.actions;
