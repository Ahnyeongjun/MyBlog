import { all, fork } from 'redux-saga/effects';
import themeSaga from '../../features/theme/themeSaga';
import authSaga from '../../features/auth/authSaga';
import postSaga from '../../features/post/postSaga';
import editorSaga from '../../features/editor/editorSaga';
import tagSaga from '../../features/tag/tagSaga';
import postListSaga from '../../features/postList/postListSaga';
function* rootSaga() {
    yield all([fork(authSaga), fork(editorSaga), fork(postSaga), fork(tagSaga), fork(postListSaga)]);
}

export default rootSaga;
