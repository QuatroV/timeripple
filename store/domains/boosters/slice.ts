import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../../types/cards";

interface BoostersState {
  count?: number;
  openedBooster?: Card[];
  showBoosterCards?: boolean;
}

const initialState: BoostersState = {
  count: undefined,
  openedBooster: undefined,
  showBoosterCards: undefined,
};

export const boostersSlice = createSlice({
  name: "boosters",
  initialState,
  reducers: {
    setBoostersCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    openBooster: (state) => {
      if (!state.count) return;
      state.count = state.count - 1;
      return state;
    },
    setOpenedBooster: (state, action: PayloadAction<Card[]>) => {
      state.openedBooster = action.payload;
      state.showBoosterCards = true;
    },
    closeOpenedBooster: (state) => {
      state.openedBooster = [];
      state.showBoosterCards = false;
    },
  },
});

export const {
  setBoostersCount,
  openBooster,
  setOpenedBooster,
  closeOpenedBooster,
} = boostersSlice.actions;

export const addDailyBooster = createAction("addDailyBooster");

export default boostersSlice.reducer;
