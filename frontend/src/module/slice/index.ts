import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../../features/theme/themeSlice';
import editorReducer from '../../features/editor/editorSlice';
const rootReducer = combineReducers({
    // scroll: scrollReducer,
    theme: themeReducer,
    editor: editorReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
