import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Featured } from 'src/container/Feautred/styles';
import { StoreType } from 'src/module/store';
import {
    editorActionType,
    editorSliceInitialStateType,
    mainContentActionType,
    mainImageURLActionType,
    PageNationBlogType,
    successGetBlogType,
    tagActioinType,
    titleActionType,
    upLoadActionType,
} from './editorType';

const initialState: editorSliceInitialStateType = {
    text: '',
    title: '',
    tag: [],
    mainContent: '',
    mainImageURL: '',
    postData: [
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
    ],
    FeautredPostData: [
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
            mainImageURL: '',
            mainContent: '',
        },
    ],

    total: 0,
};
const sliceName = 'editor';

const reducers = {
    updateText: (state = initialState, action: PayloadAction<editorActionType>) => {
        state.text = action.payload.text;
    },
    updateTitle: (state = initialState, action: PayloadAction<titleActionType>) => {
        state.title = action.payload.title;
    },
    updateMainImageUrl: (state = initialState, action: PayloadAction<mainImageURLActionType>) => {
        state.mainImageURL = action.payload.mainImageURL;
    },
    updateMainContent: (state = initialState, action: PayloadAction<mainContentActionType>) => {
        state.mainContent = action.payload.mainContent;
    },
    successPostPagenationPost: (state = initialState) => {
        state.tag = [];
        state.text = '';
        state.title = '';
        state.mainImageURL = '';
        state.mainContent = '';
    },
    pushTag: (state = initialState, action: PayloadAction<tagActioinType>) => {
        state.tag.push(action.payload.tag);
    },
    removeTag: (state = initialState, action: PayloadAction<tagActioinType>) => {
        state.tag = state.tag.filter((e) => e !== action.payload.tag);
    },
    uploadPost: (state = initialState, action: PayloadAction<upLoadActionType>) => {},
    getPagenationPost: (state = initialState, action: PayloadAction<PageNationBlogType>) => {},
    successGetPagenationPost: (state = initialState, action: PayloadAction<successGetBlogType>) => {
        if (action.payload.type == 'Feautred') {
            console.log('Feautred');
            state.FeautredPostData = action.payload.postData;
        } else {
            if (state.postData.length > 7) action.payload.postData.map((e) => state.postData.push(e));
            else state.postData = action.payload.postData;
            console.log(state.postData.length);
        }
    },
    getPagenationFeautredPost: (state = initialState, action: PayloadAction<PageNationBlogType>) => {},
};

const editorSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = editorSlice;
export const {
    updateMainContent,
    updateMainImageUrl,
    updateText,
    updateTitle,
    pushTag,
    removeTag,
    uploadPost,
    getPagenationPost,
    successGetPagenationPost,
    getPagenationFeautredPost,
    successPostPagenationPost,
} = actions;
export const editorState = (state: StoreType) => state.editor;

export default reducer;
