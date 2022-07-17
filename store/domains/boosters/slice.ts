import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BoostersState {
  count?: number;
}

const initialState: BoostersState = {
  count: undefined,
};

export const boostersSlice = createSlice({
  name: "boosters",
  initialState,
  reducers: {
    setBoostersCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setBoostersCount } = boostersSlice.actions;

export const addDailyBooster = createAction("addDailyBooster");

export default boostersSlice.reducer;
