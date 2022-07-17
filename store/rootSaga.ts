import { all, put } from "redux-saga/effects";
import { saga as authSaga } from "./domains/auth";
import { saga as errorSaga } from "./domains/error";
import { saga as routerSaga } from "./domains/router";
import { saga as boostersSaga } from "./domains/boosters";

function* rootSaga() {
  yield all([authSaga(), errorSaga(), routerSaga(), boostersSaga()]);
}

export default rootSaga;
