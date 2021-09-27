import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Featured } from 'src/container/Feautred/styles';
import { StoreType } from 'src/module/store';
import {
    editorActionType,
    editorSliceInitialStateType,
    mainContentActionType,
    mainImageURLActionType,
    serriesNameActionType,
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
    seriesName: '',
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
    updateSeriesName: (state = initialState, action: PayloadAction<serriesNameActionType>) => {
        state.seriesName = action.payload.seriesName;
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
    uploadPost,
    updateText,
    updateTitle,
    pushTag,
    removeTag,
    successPostPagenationPost,
    updateSeriesName,
} = actions;
export const editorState = (state: StoreType) => state.editor;

export default reducer;
