// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.

import { calculatorSlice } from "@reduxjs/toolkit";

export const counterSlice = calculatorSlice({
  name: "counter",
  initialState: {
    result: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.result += action.payload;
    },
    decrement: (state, action) => {
      state.result -= action.payload;
    },
    reset: (state) => {
      state.result = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
