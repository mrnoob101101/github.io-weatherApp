import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  getLatLngFromLibrary,
  getForecastError,
  getForecastSuccess
} from './weatherForecast.slice';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

function* workFetchForecastByLanLng(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}?lat=${action.payload.lat}&lon=${action.payload.lng}&lang=ru&exclude={part}&units=metric&appid=${API_KEY}`
  });
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
