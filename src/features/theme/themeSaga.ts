import { toggleTheme } from "./themeSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { ThemeActionType } from "./themeType";

function* toggleThemeSaga(action: PayloadAction<ThemeActionType>) {
  try {
    const theme = action.payload.themeType;

    yield put(toggleTheme({ themeType: theme }));
  } catch (error) {
    console.log(error);
  }
}

function* watchToggleTheme() {
  yield takeLatest(toggleTheme.type, toggleThemeSaga);
}

export default function* toggleSaga() {
  yield all([fork(watchToggleTheme)]);
}
