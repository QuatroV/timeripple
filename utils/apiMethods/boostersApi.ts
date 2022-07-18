import { CommonServerResponse } from "../../types/api";
import { Card } from "../../types/cards";
import { authApi } from "./base";

type GetBoosterCountResponse = CommonServerResponse & {
  boostersCount?: number;
};

export const getBoosterCount = (): Promise<GetBoosterCountResponse> =>
  authApi.get("/boosters/count").then((res) => res.data);

type GetDailyBoosterResponse = CommonServerResponse & {
  boostersCount?: number;
};

export const getDailyBooster = (): Promise<GetDailyBoosterResponse> =>
  authApi.get("/boosters/dailyBooster").then((res) => res.data);

type GetOpenBoosterResponse = CommonServerResponse & {
  cards?: Card[];
};

export const getOpenBooster = (): Promise<GetOpenBoosterResponse> =>
  authApi.get("/boosters/open").then((res) => res.data);
