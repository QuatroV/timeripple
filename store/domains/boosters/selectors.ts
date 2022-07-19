import { RootState } from "../..";

export const boostersSelector = (state: RootState) => state.boosters;

export const boostersCountSelector = (state: RootState) =>
  boostersSelector(state).count;

export const showBoosterCardsSelector = (state: RootState) =>
  boostersSelector(state).showBoosterCards;

export const openedBoosterSelector = (state: RootState) =>
  boostersSelector(state).openedBooster;
