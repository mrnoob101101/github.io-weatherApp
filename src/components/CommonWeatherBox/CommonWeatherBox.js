import {StyledCommonWeatherBox} from "./CommonWeatherBox.styles";
import {PlacesAutocompleteSearch} from "../Search/PlacesAutocompleteSearch";
import {WeatherCard} from "../WeatherCard/WeatherCard";
import {DailyForecastCard} from "../DailyForecastCard/DailyForecastCard";

export const CommonWeatherBox = () => {


    return (
        <StyledCommonWeatherBox>
            <PlacesAutocompleteSearch/>
            <WeatherCard/>
            <DailyForecastCard/>
        </StyledCommonWeatherBox>

    )
}
