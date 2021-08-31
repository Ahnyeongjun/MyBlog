import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
        },
        {
            tag: [],
            title: 'S',
            text: 'SSS',
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
    getPost: (state = initialState, action: PayloadAction<PageNationBlogType>) => {},
    successGetPost: (state = initialState, action: PayloadAction<successGetBlogType>) => {
        state.postData = action.payload.postData;
        console.log(state.postData);
    },
};

const editorSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = editorSlice;
export const { updateText, updateTitle, pushTag, removeTag, uploadPost, getPost, successGetPost } = actions;
export const editorState = (state: StoreType) => state.editor;

export default reducer;
