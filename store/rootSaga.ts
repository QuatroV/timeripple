import { all, put } from "redux-saga/effects";
import authSaga from "./domains/auth/saga";
import errorSaga from "./domains/error/saga";

function* rootSaga() {
  yield all([authSaga(), errorSaga()]);
}

export default rootSaga;
