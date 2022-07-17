import { all, takeLatest, call, SagaReturnType, put } from "redux-saga/effects";
import { postRegister, postSignIn } from "../../../utils/apiMethods/authApi";
import { addError } from "../error";
import { goToHomePage, goToAuthPage } from "../router/slice";
import {
  signIn,
  commitRegisterCredentials,
  commitSignInCredentials,
  signOut,
} from "./slice";

function* handleAuthError(e: Error) {
  yield put(
    addError({
      message: "Authentication error",
      description: e.message,
      trace: "AuthSlice",
    })
  );
}

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

    if (success && token) {
      yield put(signIn({ nickname: userCredentials.nickname, token }));
    }
  } catch (e) {
    yield call(handleAuthError, e as Error);
  }
}

function* handleCommitSignIn(
  action: ReturnType<typeof commitSignInCredentials>
) {
  try {
    const { payload: userCredentials } = action;
    const response: SagaReturnType<typeof postRegister> = yield call(
      postSignIn,
      userCredentials
    );

    const { success, error, token } = response;

    if (!success || error) {
      console.log(success, error);
      throw new Error(error);
    }

    if (success && token) {
      yield put(signIn({ nickname: userCredentials.nickname, token }));
    }
  } catch (e) {
    yield call(handleAuthError, e as Error);
  }
}

function saveTokenInLocalStorage(token: string) {
  localStorage.setItem("jwtToken", token);
}

function* handleSignIn(action: ReturnType<typeof signIn>) {
  yield call(saveTokenInLocalStorage, action.payload.token);
  yield put(goToHomePage());
}

function* handleSignOut(action: ReturnType<typeof signOut>) {
  yield put(goToAuthPage());
}

export default function* authSaga(): Generator {
  yield all([
    yield takeLatest(commitRegisterCredentials.type, handleCommitRegister),
    yield takeLatest(commitSignInCredentials.type, handleCommitSignIn),
    yield takeLatest(signIn.type, handleSignIn),
    yield takeLatest(signOut.type, handleSignOut),
  ]);
}
