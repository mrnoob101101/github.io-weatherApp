import React, {useState} from "react";
import {StyledCommonWeatherBox} from "./CommonWeatherBox.styles";
import {Search} from "../Search/Search";
import {useDispatch} from "react-redux";
import {getSupposedCitiesFetch} from "../../store/autocomplete.slice/autocomplete.slice";

export const CommonWeatherBox = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value);
        if (inputValue.trim()) {
            dispatch(getSupposedCitiesFetch(inputValue))
        }
    };

    /*const sendInputValueToAutocompleteAPI = () => {
        if (inputValue.trim()) {
            dispatch(getSupposedCitiesFetch(inputValue))
        }
    }*/

    return (
        <StyledCommonWeatherBox>
            <Search inputValue={inputValue} handleChangeInputValue={handleChangeInputValue}/>
        </StyledCommonWeatherBox>

    )
}
