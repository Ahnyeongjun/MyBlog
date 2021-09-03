import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../../features/theme/themeSlice';
import editorReducer from '../../features/editor/editorSlice';
import authReducer from '../../features/auth/authSlice';
import tagReducer from '../../features/tag/tagSlice';
import postReducer from '../../features/post/postSlice';
import postListReducer from '../../features/postList/postListSlice';
const rootReducer = combineReducers({
    // scroll: scrollReducer,
    theme: themeReducer,
    editor: editorReducer,
    auth: authReducer,
    post: postReducer,
    tag: tagReducer,
    postList: postListReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
