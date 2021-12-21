import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {
    getLatLngFromLibrary,
    getForecastError,
    getForecastSuccess
} from "./weatherForecast.slice";

function* workFetchForecastByLanLng(action) {
    const axiosFormatted = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${action.payload.lat}&lon=${action.payload.lng}&lang=ru&exclude={part}&units=metric&appid=68ed3e5f8b3f2f49f60d8fb52e794c62`,
    })

    try {
        const forecastFetch = yield call(() => axiosFormatted.get());
        console.log(forecastFetch.data);
        yield put(getForecastSuccess(forecastFetch.data));
    } catch (error) {
        yield put(getForecastError(error));
    }
}

function* forecastSaga() {
    yield takeEvery(getLatLngFromLibrary, workFetchForecastByLanLng);
}

export default forecastSaga;


