import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import { getTagType, tagInitialStateType } from './tagType';

const initialState: tagInitialStateType = {
    tag: [
        {
            name: 'Ss',
            count: 1,
        },
    ],
};
const sliceName = 'tag';

const reducers = {
    getTag: (state = initialState, action: PayloadAction<getTagType>) => {},
    getTagSuccess: (state = initialState, action: PayloadAction<tagInitialStateType>) => {
        state.tag = action.payload.tag;
    },
};

const tagSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = tagSlice;
export const { getTag, getTagSuccess } = actions;
export const tagDateState = (state: StoreType) => state.tag;

export default reducer;
