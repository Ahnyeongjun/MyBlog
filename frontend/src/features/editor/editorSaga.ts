import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { editorSliceInitialStateType, PageNationBlogType } from './editorType';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { BLOG_URL } from '../../lib/apiUrlLib';
import {
    getPagenationFeautredPost,
    getPagenationPost,
    successGetPagenationPost,
    successPostPagenationPost,
    uploadPost,
} from './editorSlice';
function* editorPostSaga(action: PayloadAction<editorSliceInitialStateType>) {
    try {
        console.log(action.payload);

        const { text, title, tag, mainContent, mainImageURL } = action.payload;
        const httpMethod = methodType.POST;
        const requestUrl = BLOG_URL.blog();
        console.log(action.payload);
        const body = { content: text, title, tag, mainContent: mainContent, mainImageURL: mainImageURL };
        const headers = {
            Authorization: localStorage.getItem('accessToken'),
        };
        const res = yield call(requestApiWithBody, { httpMethod, requestUrl, body, headers });
        if ('data' in res) {
            yield put(successPostPagenationPost());

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

        const { page, pageSize, type } = action.payload;
        const httpMethod = methodType.GET;
        const requestUrl = BLOG_URL.pageNation({
            page,
            pageSize,
        });
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(successGetPagenationPost({ postData: newResDataObj.data, total: newResDataObj.total, type: type }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* getPagenationFeautredPostSaga(action: PayloadAction<PageNationBlogType>) {
    try {
        console.log(action.payload);

        const { page, pageSize, type } = action.payload;
        const httpMethod = methodType.GET;
        const requestUrl = BLOG_URL.pageNation({
            page,
            pageSize,
        });
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(successGetPagenationPost({ postData: newResDataObj.data, total: newResDataObj.total, type: type }));
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
    yield takeLatest(getPagenationPost.type, getPagenationPostSaga);
}
function* watchEditorFeautredPagenation() {
    yield takeLatest(getPagenationFeautredPost.type, getPagenationFeautredPostSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleEditor), fork(watchEditorPagenation), fork(watchEditorFeautredPagenation)]);
}
