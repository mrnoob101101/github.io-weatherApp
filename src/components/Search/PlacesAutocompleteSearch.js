import {
    SearchBox,
    SearchWrapper,
    StyledSearch,
    SuggestionPlace,
    SuggestionsStyled
} from "./PlacesAutocompleteSearch.styles";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {useDispatch} from "react-redux";
import {getLatLngFromLibrary, setDescriptionOfPlace, setWeatherCardClear} from "../../store/weatherForecast.slice/weatherForecast.slice";


export const PlacesAutocompleteSearch = () => {
    const dispatch = useDispatch();
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {},
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {

        clearSuggestions();
    });

    const handleInput = (e) => {

        setValue(e.target.value);
    };



    const handleSelect =
        ({description}) =>
            () => {
                dispatch(setWeatherCardClear())
                setValue(description, false);
                clearSuggestions();


                getGeocode({address: description})
                    .then((results) => getLatLng(results[0]))
                    .then(({lat, lng}) => {
                        console.log("📍 Coordinates: ", {lat, lng});
                        dispatch(getLatLngFromLibrary({lat, lng}));
                    })
                    .catch((error) => {
                        console.log("😱 Error: ", error);
                    });

                dispatch(setDescriptionOfPlace(description))
                setValue("");
            };



    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: {main_text, secondary_text},
            } = suggestion;

            return (
                <SuggestionPlace key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </SuggestionPlace>
            );
        });

    return (
        <SearchBox>
        <SearchWrapper ref={ref}>
            <StyledSearch
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Введите местоположение"
            />

            {status === "OK" && <SuggestionsStyled>{renderSuggestions()}</SuggestionsStyled>}
            {status === "ZERO_RESULTS" && <span>Введите корректное место</span>}
        </SearchWrapper>
        </SearchBox>
    );
};
