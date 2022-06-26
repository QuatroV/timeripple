import { all, takeLatest, call, SagaReturnType } from "redux-saga/effects";
import { postRegister } from "../../../utils/apiMethods/authApi";
import { commitRegisterCredentials } from "./actions";

function* handleCommitRegister(
  action: ReturnType<typeof commitRegisterCredentials>
) {
  try {
    const { payload: userCredentials } = action;
    const response: SagaReturnType<typeof postRegister> = yield call(
      postRegister,
      userCredentials
    );

    const { success, error, token } = response;

    if (!success || error) {
      throw new Error(error);
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* authSaga(): Generator {
  yield all([
    yield takeLatest(commitRegisterCredentials.type, handleCommitRegister),
  ]);
}
