import { all, fork } from 'redux-saga/effects';
import authSaga from '../../features/auth/authSaga';
import postSaga from '../../features/post/postSaga';
import editorSaga from '../../features/editor/editorSaga';
import tagSaga from '../../features/tag/tagSaga';
import postListSaga from '../../features/postList/postListSaga';
import seriesSaga from '../../features/series/seriesSaga';
function* rootSaga() {
    yield all([fork(authSaga), fork(editorSaga), fork(postSaga), fork(tagSaga), fork(postListSaga), fork(seriesSaga)]);
}

export default rootSaga;
