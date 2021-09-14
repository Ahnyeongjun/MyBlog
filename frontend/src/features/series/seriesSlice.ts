import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from '../../module/store';
import { seriesInitialStateType, seriesNameType, successSeriesListType, successSeriesType } from './seriesType';

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
    seriesList: [
        {
            uid: '',
            title: 'S',
            mainImageURL: '',
            mainContent: '',
            searchUrl: '',
            createdAt: 'sssssssss',
        },
    ],
};
const sliceName = 'series';

const reducers = {
    getAllSeries: (state = initialState) => {},
    successGetAllSeries: (state = initialState, action: PayloadAction<successSeriesType>) => {
        state.series = action.payload.series;
    },
    getAllSeriesList: (state = initialState, action: PayloadAction<seriesNameType>) => {},
    successGetAllSeriesList: (state = initialState, action: PayloadAction<successSeriesListType>) => {
        state.seriesList = action.payload.seriesList;
    },
};

const tagSlice = createSlice({
    name: sliceName,
    initialState,
    reducers,
});

const { actions, reducer } = tagSlice;
export const { getAllSeries, successGetAllSeries, getAllSeriesList, successGetAllSeriesList } = actions;
export const seriesDateState = (state: StoreType) => state.series;

export default reducer;
