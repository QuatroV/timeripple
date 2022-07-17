import { RootState } from "../..";

export const boostersSelector = (state: RootState) => state.boosters;

export const boostersCountSelector = (state: RootState) =>
  boostersSelector(state).count;
