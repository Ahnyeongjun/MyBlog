import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import { getTagType, searchTagNameType, successOneTagType, successTagListType, tagInitialStateType } from './tagType';

const initialState: tagInitialStateType = {
    tag: [
        {
            name: 'Ss',
            count: 1,
        },
    ],
    oneTag: {
        name: '',
        count: 0,
    },
};
const sliceName = 'tag';

const reducers = {
    getTag: (state = initialState, action: PayloadAction<getTagType>) => {},
    getTagSuccess: (state = initialState, action: PayloadAction<successTagListType>) => {
        state.tag = action.payload.tag;
    },
    searchTag: (state = initialState, action: PayloadAction<searchTagNameType>) => {},
    searchTagSuccess: (state = initialState, action: PayloadAction<successOneTagType>) => {
        state.oneTag.count = action.payload.tag.count;
        state.oneTag.name = action.payload.tag.name;
    },
};

const tagSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = tagSlice;
export const { getTag, getTagSuccess, searchTagSuccess, searchTag } = actions;
export const tagDateState = (state: StoreType) => state.tag;

export default reducer;
