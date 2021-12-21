import {combineReducers} from "@reduxjs/toolkit";
import weatherForecastSlice from "./autocomplete.slice/weatherForecast.slice";


export const rootReducer = combineReducers({
    forecast: weatherForecastSlice,
})
