import { all, takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { Card } from "../../../types/cards";
import {
  getBoosterCount,
  getDailyBooster,
  getOpenBooster,
} from "../../../utils/apiMethods/boostersApi";
import { addError } from "../error";
import { showModal } from "../modal";
import { goToBoostersPage } from "../router/slice";
import {
  addDailyBooster,
  openBooster,
  setBoostersCount,
  setOpenedBooster,
} from "./slice";

function* handleBoostersError(e: Error) {
  yield put(
    addError({
      message: "Fetching booster info error",
      description: e.message,
      trace: "BoostersSlice",
    })
  );
}

function* fetchBoostersCount() {
  try {
    const response: SagaReturnType<typeof getBoosterCount> = yield call(
      getBoosterCount
    );

    const { success, error } = response;

    if (!success || error) {
      throw new Error(error);
    }

    const { boostersCount } = response;

    if (success) {
      yield put(setBoostersCount(boostersCount as number));
    }
  } catch (e) {
    yield call(handleBoostersError, e as Error);
  }
}

function* handleBoostersPageview(action: ReturnType<typeof goToBoostersPage>) {
  yield call(fetchBoostersCount);
}

function* handleAddDailyBooster(action: ReturnType<typeof addDailyBooster>) {
  try {
    const response: SagaReturnType<typeof getDailyBooster> = yield call(
      getDailyBooster
    );

    const { success, error } = response;

    if (!success || error) {
      throw new Error(error);
    }

    const { boostersCount } = response;

    if (success) {
      yield put(setBoostersCount(boostersCount as number));
    }
  } catch (e) {
    yield call(handleBoostersError, e as Error);
  }
}

function* handleOpenBooster(action: ReturnType<typeof openBooster>) {
  try {
    const response: SagaReturnType<typeof getOpenBooster> = yield call(
      getOpenBooster
    );

    const { success, error } = response;

    if (!success || error) {
      throw new Error(error);
    }

    const { cards } = response;

    if (success) {
      yield put(setOpenedBooster(cards as Card[]));
    }
  } catch (e) {
    yield call(handleBoostersError, e as Error);
  }
}

export default function* boostersSaga(): Generator {
  yield all([
    yield takeLatest(goToBoostersPage.type, handleBoostersPageview),
    yield takeLatest(addDailyBooster.type, handleAddDailyBooster),
    yield takeLatest(openBooster.type, handleOpenBooster),
  ]);
}
