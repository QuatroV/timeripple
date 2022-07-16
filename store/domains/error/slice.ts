import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ErrorObject = {
  message: string;
  description: string;
  trace: string;
};

interface ErrorState {
  errors: ErrorObject[];
}

const initialState: ErrorState = {
  errors: [],
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<ErrorObject>) => {
      state.errors.push(action.payload);
      return state;
    },
    removeFirstError: (state) => {
      state.errors.pop();
      return state;
    },
  },
});

export const { addError, removeFirstError } = errorSlice.actions;

export default errorSlice.reducer;
