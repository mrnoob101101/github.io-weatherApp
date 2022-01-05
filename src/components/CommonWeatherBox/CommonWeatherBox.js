import { StyledCommonWeatherBox } from './CommonWeatherBox.styles';
import { PlacesAutocompleteSearch } from '../Search/PlacesAutocompleteSearch';
import { CurrentWeatherCard } from '../CurrentWeatherCard/CurrentWeatherCard';
import { DailyForecastCard } from '../DailyForecastCard/DailyForecastCard';

export const CommonWeatherBox = () => {
  return (
    <StyledCommonWeatherBox>
      <PlacesAutocompleteSearch />
      <CurrentWeatherCard />
      <DailyForecastCard />
    </StyledCommonWeatherBox>
  );
};
