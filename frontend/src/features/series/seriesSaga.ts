import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { SERIES_URL } from '../../lib/apiUrlLib';
import { getAllSeries, successGetAllSeries } from './seriesSlice';

function* getAllSeriesSaga() {
    try {
        const httpMethod = methodType.GET;
        const requestUrl = SERIES_URL.series();
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            console.log(newResDataObj);
            yield put(successGetAllSeries({ series: newResDataObj.series }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}

function* watchToggleSerries() {
    yield takeLatest(getAllSeries.type, getAllSeriesSaga);
}

export default function* toggleSaga() {
    yield all([fork(watchToggleSerries)]);
}
