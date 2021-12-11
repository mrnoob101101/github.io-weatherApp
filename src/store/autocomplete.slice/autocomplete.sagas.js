import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {getSupposedCitiesError, getSupposedCitiesFetch, getSupposedCitiesSuccess} from "./autocomplete.slice";

function* workFetchAutoCompleteCities(action) {
    try {

        const autoCompleteData = yield call(() => axios.get(`https://app.geocodeapi.io/api/v1/autocomplete?text=${action.payload}%20Fifth%20Ave&apikey=d4290e80-5920-11ec-a28e-81659f9119e0`));
        console.log(autoCompleteData.data);
        yield put(getSupposedCitiesSuccess(autoCompleteData.data));
    } catch (error) {
        yield put(getSupposedCitiesError(error));
    }

    }
function* autoCompleteSaga() {
    yield takeEvery(getSupposedCitiesFetch, workFetchAutoCompleteCities);
}

export default autoCompleteSaga;

/*
http://autocomplete.travelpayouts.com/places2?term=${action.payload}&locale=ru&types[]=airport*/
