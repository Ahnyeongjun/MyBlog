import { PayloadAction } from '@reduxjs/toolkit';
import { BLOG_URL } from '../../lib/apiUrlLib';
import { methodType, requestApi } from '../../lib/requestLib';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { PageNationSearchPostListActionType, SearchTagOnPostListActionType } from './postListType';
import {
    getPagenationFeautredPostList,
    getPagenationMainPostList,
    successGetPagenationFeautredPostList,
    successGetPagenationMainPostList,
    searchTagOnPageList,
} from './postListSlice';

function* getPagenationMainPostListSaga(action: PayloadAction<PageNationSearchPostListActionType>) {
    try {
        console.log(action.payload);

        const { page, pageSize, type } = action.payload;
        const httpMethod = methodType.GET;
        const headers = '';

        const requestUrl = BLOG_URL.pageNation({
            page,
            pageSize,
        });
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });

        if ('data' in res) {
            const newResDataObj = { ...res.data };
            console.log(type);

            yield put(successGetPagenationMainPostList({ postListData: newResDataObj.data, total: newResDataObj.total, type: type }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* getPagenationFeaturedPostListSaga(action: PayloadAction<PageNationSearchPostListActionType>) {
    try {
        console.log(action.payload);

        const { page, pageSize, type } = action.payload;
        const httpMethod = methodType.GET;
        const headers = '';

        const requestUrl = BLOG_URL.pageNation({
            page,
            pageSize,
        });
        const res = yield call(requestApi, { httpMethod, requestUrl, headers });

        if ('data' in res) {
            const newResDataObj = { ...res.data };
            console.log(type);

            yield put(successGetPagenationFeautredPostList({ postListData: newResDataObj.data, total: newResDataObj.total, type: type }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* searchTagOnPageListSaga(action: PayloadAction<SearchTagOnPostListActionType>) {
    try {
        console.log(action.payload);

        const { page, pageSize, type, tagName, total } = action.payload;
        const httpMethod = methodType.GET;
        const headers = '';

        const requestUrl = BLOG_URL.searchTag(
            {
                page,
                pageSize,
            },
            tagName
        );

        const res = yield call(requestApi, { httpMethod, requestUrl, headers });

        if ('data' in res) {
            const newResDataObj = { ...res.data };
            yield put(successGetPagenationMainPostList({ postListData: newResDataObj.post, total: total, type: type }));
        } else {
            throw new Error(`request ${requestUrl}, but network error`);
        }
    } catch (error) {
        console.log(error);
    }
}
function* watchToggleSearchPostMainList() {
    yield takeLatest(searchTagOnPageList.type, searchTagOnPageListSaga);
}
function* watchTogglePostMainList() {
    yield takeLatest(getPagenationMainPostList.type, getPagenationMainPostListSaga);
}
function* watchToggleFeaturedMainList() {
    yield takeLatest(getPagenationFeautredPostList.type, getPagenationFeaturedPostListSaga);
}
export default function* toggleSaga() {
    yield all([fork(watchTogglePostMainList), fork(watchToggleFeaturedMainList), fork(watchToggleSearchPostMainList)]);
}
