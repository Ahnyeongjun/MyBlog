import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import { postInitialStateType, postType, searchUrlBlogType } from './postType';

const initialState: postInitialStateType = {
    postData: {
        uid: '',
        createdAt: '',
        writer: '',
        title: '',
        content: '',
        tag: [],
    },
};
const sliceName = 'post';

const reducers = {
    getOnePost: (state = initialState, action: PayloadAction<searchUrlBlogType>) => {},
    successGetPost: (state = initialState, action: PayloadAction<postType>) => {
        console.log(action.payload);
        state.postData.uid = action.payload.uid;
        state.postData.content = action.payload.content;
        state.postData.createdAt = action.payload.createdAt;
        state.postData.writer = action.payload.writer;
        state.postData.title = action.payload.title;
        state.postData.tag = action.payload.tag;

        console.log(state.postData);
    },
};

const postSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = postSlice;
export const { getOnePost, successGetPost } = actions;
export const postDateState = (state: StoreType) => state.post;

export default reducer;
