import { useSelector } from "react-redux";
import {
  AdditionalInfoBlock,
  DayForecast,
  IdleStatusIcon,
  MainWeatherBlock,
  StyledCurrentWeatherWrapper,
  StyledP,
  Text,
  Text2,
  Text3,
  TextBig,
  TextInfo,
  WeatherDiv,
  WeatherIcon
} from "./CurrentWeatherCard.styles";

import { getSvgIcon } from "../../utils/svgIconLoader";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import dayjs from "dayjs";
import { getWeekDay } from "../../utils/getWeekDay";
import { getMonth } from "../../utils/getMonth";
import { SunnyIcon } from "../../assets/SvgIcons";
import { NearestForecast } from "../NearestForecast/NearestForecast";
import { getTimeOfDayWithTimeZoneOffset } from "../../utils/getTimeOfDayWithTimeZoneOffset";

export const CurrentWeatherCard = () => {
  const weatherData = useSelector(state => state.forecast);
  const currentWeather = useSelector(state => state.forecast?.locationForecast.current);
  const place = useSelector(state => state.forecast?.descriptionOfPlace);

  if (weatherData && weatherData.status === "idle") {
    return (
      <IdleStatusIcon>
        <SunnyIcon />
      </IdleStatusIcon>
    );
  }
  if (weatherData && weatherData.status === "error") {
    return <StyledP>Произошла чудовищная ошибка!</StyledP>;
  } else if (weatherData && weatherData.status === "success") {
    return (
      <StyledCurrentWeatherWrapper>
        <MainWeatherBlock>
          <b>
            <TextBig>
              {place.split(",")[0]},
              {getTimeOfDayWithTimeZoneOffset(
                currentWeather.dt,
                weatherData.locationForecast.timezone_offset
              )}
            </TextBig>
          </b>
          <b>
            <Text>
              {getWeekDay(currentWeather.dt)},{dayjs(currentWeather.dt * 1000).format(" DD")}
              {getMonth(currentWeather.dt)}
            </Text>
          </b>
          <WeatherDiv>
            <WeatherIcon>{getSvgIcon(currentWeather.weather[0].icon)}</WeatherIcon>
            <StyledP>{Math.round(currentWeather.temp)}°С</StyledP>
          </WeatherDiv>
          <b>
            <Text3>{capitalizeFirstLetter(currentWeather.weather[0].description)} </Text3>
          </b>
        </MainWeatherBlock>

        <AdditionalInfoBlock>
          <b>
            <DayForecast>
              <NearestForecast />
            </DayForecast>
          </b>
          <TextInfo>
            <b>
              <Text2>Ветер: {currentWeather.wind_speed} м/с</Text2>
            </b>
            <b>
              <Text2>Ощущается как: {Math.round(currentWeather.feels_like)}°С</Text2>
            </b>
            <b>
              <Text2>Влажность: {currentWeather.humidity}%</Text2>
            </b>
          </TextInfo>
        </AdditionalInfoBlock>
      </StyledCurrentWeatherWrapper>
    );
  } else return null;
};
