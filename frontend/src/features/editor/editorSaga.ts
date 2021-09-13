import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { editorSliceInitialStateType } from './editorType';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { BLOG_URL } from '../../lib/apiUrlLib';
import { successPostPagenationPost, uploadPost } from './editorSlice';
function* editorPostSaga(action: PayloadAction<editorSliceInitialStateType>) {
    try {
        console.log(action.payload);

        const { text, title, tag, mainContent, mainImageURL, seriesName } = action.payload;
        const httpMethod = methodType.POST;
        const requestUrl = BLOG_URL.blog();
        console.log(action.payload);
        const body = { content: text, title, tagName: tag, mainContent: mainContent, mainImageURL: mainImageURL, seriesName: seriesName };
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

function* watchToggleEditor() {
    yield takeLatest(uploadPost.type, editorPostSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleEditor)]);
}
