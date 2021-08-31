import { all, fork } from 'redux-saga/effects';
import themeSaga from '../../features/theme/themeSaga';
import authSaga from '../../features/auth/authSaga';
import editorSaga from '../../features/editor/editorSaga';
function* rootSaga() {
    yield all([fork(authSaga), fork(editorSaga)]);
}

export default rootSaga;
