import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { editorSliceInitialStateType, PageNationBlogType } from './editorType';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { BLOG_URL } from '../../lib/apiUrlLib';
import { getPost, successGetPost, uploadPost } from './editorSlice';
function* editorPostSaga(action: PayloadAction<editorSliceInitialStateType>) {
    try {
        console.log(action.payload);

        const { text, title, tag } = action.payload;
        const httpMethod = methodType.POST;
        const requestUrl = BLOG_URL.blog();
        const body = { content: text, title, tag };
        const headers = {
            Authorization: localStorage.getItem('accessToken'),
        };
        const res = yield call(requestApiWithBody, { httpMethod, requestUrl, body, headers });
        if ('data' in res) {
            alert('작성되었습니다.');
            location.href = '/';
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* getPagenationPostSaga(action: PayloadAction<PageNationBlogType>) {
    try {
        console.log(action.payload);

        const { page, pageSize } = action.payload;
        const httpMethod = methodType.GET;
        const requestUrl = BLOG_URL.pageNation({
            page,
            pageSize,
        });
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(successGetPost({ postData: newResDataObj.data, total: newResDataObj.total }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* watchToggleEditor() {
    yield takeLatest(uploadPost.type, editorPostSaga);
}
function* watchEditorPagenation() {
    yield takeLatest(getPost.type, getPagenationPostSaga);
}
export default function* toggleSaga() {
    yield all([fork(watchToggleEditor), fork(watchEditorPagenation)]);
}
