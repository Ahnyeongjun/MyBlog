import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from 'src/module/store';
import { editorActionType, editorSliceInitialStateType, tagActioinType, titleActionType } from './editorType';

const initialState: editorSliceInitialStateType = {
    text: '',
    title: '',
    tag: [],
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
};

const editorSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = editorSlice;
export const { updateText, updateTitle, pushTag, removeTag } = actions;
export const editorState = (state: StoreType) => state.editor;

export default reducer;
