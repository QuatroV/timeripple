import Router from "next/router";
import { all, takeLatest, put } from "redux-saga/effects";
import { PAGES } from "../../../constants/pages";
import { goToAuthPage, goToBoostersPage, goToHomePage } from "./slice";

function* handleGoToHomePage(action: ReturnType<typeof goToHomePage>) {
  Router.push(PAGES.HOME);
}

function* handleGoToAuthPage(action: ReturnType<typeof goToAuthPage>) {
  Router.push(PAGES.AUTH);
}

function* handleGoToBoostersPage(action: ReturnType<typeof goToBoostersPage>) {
  Router.push(PAGES.BOOSTERS);
}

export default function* routerSaga(): Generator {
  yield all([
    yield takeLatest(goToHomePage.type, handleGoToHomePage),
    yield takeLatest(goToAuthPage.type, handleGoToAuthPage),
    yield takeLatest(goToBoostersPage.type, handleGoToBoostersPage),
  ]);
}
