import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import {
    PageNationSearchPostListActionType,
    PostListInitialStateType,
    SearchTagOnPostListActionType,
    SuccessGetPostListActionType,
} from './postListType';

const initialState: PostListInitialStateType = {
    MainPostList: [
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
    ],
    FeautredPostList: [
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: 'SssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssss',
            mainImageURL: '',
            mainContent: 'SssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssss',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
    ],
    total: 0,
};
const sliceName = 'postList';

const reducers = {
    getPagenationFeautredPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => {},
    getPagenationTrendingPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => {},
    getPagenationMainPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => {},
    searchTagOnPageList: (state = initialState, action: PayloadAction<SearchTagOnPostListActionType>) => {},
    successGetPagenationFeautredPostList: (state = initialState, action: PayloadAction<SuccessGetPostListActionType>) => {
        state.FeautredPostList = action.payload.postListData;
    },

    successGetPagenationMainPostList: (state = initialState, action: PayloadAction<SuccessGetPostListActionType>) => {
        if (state.MainPostList && state.MainPostList.length > 7) action.payload.postListData.map((e) => state.MainPostList.push(e));
        else state.MainPostList = action.payload.postListData;
    },
};

const postListSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = postListSlice;
export const {
    getPagenationFeautredPostList,
    getPagenationTrendingPostList,
    getPagenationMainPostList,
    successGetPagenationFeautredPostList,
    successGetPagenationMainPostList,
    searchTagOnPageList,
} = actions;
export const postListDateState = (state: StoreType) => state.postList;

export default reducer;
