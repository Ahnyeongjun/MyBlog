import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { BLOG_URL, TAG_URL } from '../../lib/apiUrlLib';
import { getTagType, searchTagNameType, successOneTagType } from './tagType';
import { getTag, getTagSuccess, searchTag, searchTagSuccess } from './tagSlice';

function* getTagSaga(action: PayloadAction<getTagType>) {
    try {
        console.log(action.payload);

        const httpMethod = methodType.GET;
        const requestUrl = TAG_URL.tag();
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            console.log(newResDataObj);
            yield put(getTagSuccess({ tag: newResDataObj.tag }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* searchTagNameSaga(action: PayloadAction<searchTagNameType>) {
    try {
        const tagName = action.payload.tagName;

        const httpMethod = methodType.GET;
        const requestUrl = TAG_URL.searchTagName(tagName);
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });

        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(searchTagSuccess({ tag: { name: newResDataObj.name, count: newResDataObj.count } }));
        } else {
            location.href = '/';
            alert('존재 하지 않는 tag입니다.');
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        location.href = '/';
        alert('존재 하지 않는 tag입니다.');
        console.log(error);
    }
}
function* watchToggleTag() {
    yield takeLatest(getTag.type, getTagSaga);
}
function* watchToogleSearchTag() {
    yield takeLatest(searchTag.type, searchTagNameSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleTag), fork(watchToogleSearchTag)]);
}
