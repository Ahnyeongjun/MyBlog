import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';
import { methodType, requestApi } from '../../lib/requestLib';
import { BLOG_URL } from '../../lib/apiUrlLib';
import { searchUrlBlogType } from './postType';
import { getOnePost, successGetPost } from './postSlice';
function* getOnePostSaga(action: PayloadAction<searchUrlBlogType>) {
    try {

        const searchUrl = action.payload.searchUrl;
        const httpMethod = methodType.GET;
        const requestUrl = BLOG_URL.searchUrl(searchUrl);
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(successGetPost(newResDataObj));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}

function* watchToggleGetOnePost() {
    yield takeLatest(getOnePost.type, getOnePostSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleGetOnePost)]);
}
