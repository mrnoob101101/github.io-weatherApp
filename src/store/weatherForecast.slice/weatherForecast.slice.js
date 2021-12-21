import {createSlice} from "@reduxjs/toolkit";


const weatherForecastSlice = createSlice({
        name: "weatherForecast",
        initialState: {
            locationForecast: {},
            status: "idle",
            latLng: {},
            descriptionOfPlace: "",
        },
        reducers: {
            getLatLngFromLibrary(state, action) {
                state.LatLng = action.payload;
                state.status = "loading";
            },
            getForecastSuccess(state, action) {
                state.status = "success";
                state.locationForecast = action.payload;
            },
            getForecastError(state, action) {
                state.status = "error";
                console.log(action.payload);
            },
            setDescriptionOfPlace(state, action) {
                state.descriptionOfPlace = action.payload
            }

        }
    }
)

export const {
    getLatLngFromLibrary,
    getForecastSuccess,
    getForecastError,
    setDescriptionOfPlace,
} = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;
