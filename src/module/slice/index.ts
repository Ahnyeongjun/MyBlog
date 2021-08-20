import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../../features/theme/themeSlice";
const rootReducer = combineReducers({
  // scroll: scrollReducer,
  theme: themeReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
