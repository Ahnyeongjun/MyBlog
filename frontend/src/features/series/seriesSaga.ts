import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { methodType, requestApi, requestApiWithBody } from '../../lib/requestLib';
import { SERIES_URL } from '../../lib/apiUrlLib';
import { getAllSeries, getAllSeriesList, successGetAllSeries, successGetAllSeriesList } from './seriesSlice';
import { seriesNameType } from './seriesType';

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

function* getAllSeriesListSaga(action: PayloadAction<seriesNameType>) {
    try {
        const seriesName = action.payload.seriesName;

        const httpMethod = methodType.GET;
        const requestUrl = SERIES_URL.searchSeriesName(seriesName);
        const headers = '';
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });
        if ('data' in res) {
            const newResDataObj = { ...res.data };
            console.log(newResDataObj);
            yield put(successGetAllSeriesList({ seriesList: newResDataObj.post }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        location.href = '/';
        alert('존재 하지 않는 series입니다.');
        console.log(error);
    }
}
function* watchToggleSerries() {
    yield takeLatest(getAllSeries.type, getAllSeriesSaga);
}
function* watchToggleSerriesList() {
    yield takeLatest(getAllSeriesList.type, getAllSeriesListSaga);
}
export default function* toggleSaga() {
    yield all([fork(watchToggleSerries), fork(watchToggleSerriesList)]);
}
