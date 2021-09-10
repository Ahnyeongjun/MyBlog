import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import { seriesInitialStateType } from './seriesType';

const initialState: seriesInitialStateType = {
    series: [
        {
            name: '',
            post: [
                {
                    uid: '',
                    createdAt: '',
                    mainImageURL: '',
                },
            ],
        },
    ],
};
const sliceName = 'series';

const reducers = {
    getAllSeries: (state = initialState) => {},
    successGetAllSeries: (state = initialState, action: PayloadAction<seriesInitialStateType>) => {
        state.series = action.payload.series;
    },
};

const tagSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = tagSlice;
export const { getAllSeries, successGetAllSeries } = actions;
export const seriesDateState = (state: StoreType) => state.series;

export default reducer;
