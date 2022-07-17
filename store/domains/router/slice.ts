import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RouterState {}

const initialState: RouterState = {};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {},
});

export const goToHomePage = createAction("goToHomePage");

export const goToAuthPage = createAction("goToAuthPage");

export const goToBoostersPage = createAction("goToBoostersPage");

export default routerSlice.reducer;
