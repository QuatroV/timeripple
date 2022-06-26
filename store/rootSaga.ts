import { all } from "redux-saga/effects";
import authSaga from "./domains/auth/saga";

function* rootSaga() {
  yield all([authSaga()]);
}

export default rootSaga;
