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
            title: 'RTSP-용어정리',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: 'SssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssss',
            mainImageURL: 'https://cdn.pixabay.com/photo/2021/07/21/07/09/cygnet-6482420_960_720.jpg',
            mainContent:
                'SssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssss',
            searchUrl: '',
            createdAt: 'sssssssss',
        },
        {
            uid: '',
            tag: [],
            title: 'S안녕안녕첫번째',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: 'sssssssss',
        },
    ],
    FeautredPostList: [
        {
            uid: '',
            tag: [],
            title: 'S안녕안녕첫번째S안녕안녕첫번째',
            mainImageURL: 'https://cdn.pixabay.com/photo/2021/07/21/07/09/cygnet-6482420_960_720.jpg',
            mainContent: 'S안녕안녕첫번째',
            searchUrl: '',
            createdAt: '',
        },
        {
            uid: '',
            tag: [],
            title: ',Node-RTSP-recoder 에러(rtsp, ffmpeg)',
            mainImageURL: 'https://cdn.pixabay.com/photo/2021/07/21/07/09/cygnet-6482420_960_720.jpg',
            mainContent: 'SssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssssSssssssssssssssssssssssssssssssss',
            searchUrl: '',
            createdAt: 'sssssssss',
        },
        {
            uid: '',
            tag: [],
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: 'sssssssss',
        },
    ],
    total: 0,
};
const sliceName = 'postList';

const reducers = {
    getPagenationFeautredPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => { },
    getPagenationTrendingPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => { },
    getPagenationMainPostList: (state = initialState, action: PayloadAction<PageNationSearchPostListActionType>) => { },
    searchTagOnPageList: (state = initialState, action: PayloadAction<SearchTagOnPostListActionType>) => { },
    successGetPagenationFeautredPostList: (state = initialState, action: PayloadAction<SuccessGetPostListActionType>) => {
        state.FeautredPostList = action.payload.postListData;
    },

    successGetPagenationMainPostList: (state = initialState, action: PayloadAction<SuccessGetPostListActionType>) => {
        if (state.MainPostList && state.MainPostList?.length > 7) action.payload.postListData.map((e) => state.MainPostList.push(e));
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
