import {StyledSearch} from "./PlacesAutocompleteSearch.styles";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {useDispatch} from "react-redux";
import {getLatLngFromLibrary, setDescriptionOfPlace} from "../../store/weatherForecast.slice/weatherForecast.slice";

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

                setValue(description, false);
                clearSuggestions();


                getGeocode({address: description})
                    .then((results) => getLatLng(results[0]))
                    .then(({lat, lng}) => {
                        console.log("📍 Coordinates: ", {lat, lng});
                        console.log(lat);
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
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div ref={ref}>
            <StyledSearch
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Введите место"
            />

            {status === "OK" && <ul>{renderSuggestions()}</ul>}
            {status === "ZERO_RESULTS" && <span>Введите корректное место</span>}
        </div>
    );
};
