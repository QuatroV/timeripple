import { all, takeLatest, put } from "redux-saga/effects";
import { showModal } from "../modal";
import { addError, removeFirstError } from "./slice";

function* handleAddError(action: ReturnType<typeof addError>) {
  const { payload: ErrorObject } = action;
  console.error(
    `Error from ${ErrorObject.trace}: ${ErrorObject.message}. Details: ${ErrorObject.description}`
  );
  yield put(showModal({ message: ErrorObject.message, type: "error" }));
  yield put(removeFirstError());
}

export default function* errorSaga(): Generator {
  yield all([yield takeLatest(addError.type, handleAddError)]);
}
