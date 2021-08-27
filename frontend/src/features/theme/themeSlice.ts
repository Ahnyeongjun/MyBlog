import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from 'src/module/store';
import { ThemeActionType, ThemeSliceInitialStateType } from './themeType';

const initialState: ThemeSliceInitialStateType = {
    themeData: 'white',
};
const sliceName = 'theme';

const reducers = {
    toggleTheme: (state = initialState, action: PayloadAction<ThemeActionType>) => {
        state.themeData = action.payload.themeType;
        localStorage.setItem('theme', action.payload.themeType);
    },
};

const themeSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = themeSlice;
export const { toggleTheme } = actions;
export const themeDataState = (state: StoreType) => state.theme;

export default reducer;
