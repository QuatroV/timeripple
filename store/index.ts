import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

import { reducer as authReducer } from "./domains/auth";
import { reducer as errorReducer } from "./domains/error";
import { reducer as modalReducer } from "./domains/modal";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
