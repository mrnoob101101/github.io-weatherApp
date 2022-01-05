import {createSlice} from '@reduxjs/toolkit';

export const weatherForecastSlice = createSlice({
    name: 'weatherForecast',
    initialState: {
        locationForecast: {},
        status: 'idle',
        latLng: {},
        descriptionOfPlace: ''
    },
    reducers: {
        setWeatherCardClear(state) {
            state.status = 'idle';
        },
        getLatLngFromLibrary(state, action) {
            state.LatLng = action.payload;
            state.status = 'loading';
        },
        getForecastSuccess(state, action) {
            state.status = 'success';
            state.locationForecast = action.payload;
        },
        getForecastError(state, action) {
            state.status = 'error';
            console.log(action.payload);
        },
        setDescriptionOfPlace(state, action) {
            state.descriptionOfPlace = action.payload;
        }
    }
});

export const {
    setWeatherCardClear,
    getLatLngFromLibrary,
    getForecastSuccess,
    getForecastError,
    setDescriptionOfPlace
} = weatherForecastSlice.actions;
/*
export weatherForecastSlice.reducer;
*/
