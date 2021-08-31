import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { BLOG_URL, TAG_URL } from '../../lib/apiUrlLib';
import { getTagType } from './tagType';
import { getTag, getTagSuccess } from './tagSlice';

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

function* watchToggleLogin() {
    yield takeLatest(getTag.type, getTagSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleLogin)]);
}
