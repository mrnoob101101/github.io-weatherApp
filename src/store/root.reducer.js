import {combineReducers} from "@reduxjs/toolkit";
import autocompleteSlice from "./autocomplete.slice/autocomplete.slice";


export const rootReducer = combineReducers({
    autoComplete: autocompleteSlice,
})
