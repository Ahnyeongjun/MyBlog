import { all, fork } from "redux-saga/effects";
import themeSaga from "../../features/theme/themeSaga";

function* rootSaga() {
  yield all([]);
}

export default rootSaga;
