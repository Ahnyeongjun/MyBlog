import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../../features/theme/themeSlice';
import editorReducer from '../../features/editor/editorSlice';
import authReducer from '../../features/auth/authSlice';
const rootReducer = combineReducers({
    // scroll: scrollReducer,
    theme: themeReducer,
    editor: editorReducer,
    auth: authReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
