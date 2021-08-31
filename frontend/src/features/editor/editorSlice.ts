import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Featured } from 'components/Feautred/styles';
import { StoreType } from 'src/module/store';
import {
    editorActionType,
    editorSliceInitialStateType,
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
    postData: [
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random2',
            searchUrl: 'random2',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random3',
            searchUrl: 'random3',
        },
    ],
    FeautredPostData: [
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random',
            searchUrl: 'random',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random2',
            searchUrl: 'random2',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
            uid: 'random3',
            searchUrl: 'random3',
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
    pushTag: (state = initialState, action: PayloadAction<tagActioinType>) => {
        state.tag.push(action.payload.tag);
    },
    removeTag: (state = initialState, action: PayloadAction<tagActioinType>) => {
        state.tag = state.tag.filter((e) => e !== action.payload.tag);
    },
    uploadPost: (state = initialState, action: PayloadAction<upLoadActionType>) => {
        state.tag = [];
        state.text = '';
        state.title = '';
    },
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
    updateText,
    updateTitle,
    pushTag,
    removeTag,
    uploadPost,
    getPagenationPost,
    successGetPagenationPost,
    getPagenationFeautredPost,
} = actions;
export const editorState = (state: StoreType) => state.editor;

export default reducer;
