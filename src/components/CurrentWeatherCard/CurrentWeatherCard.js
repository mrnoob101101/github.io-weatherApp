import {useSelector} from "react-redux";
import React from "react";
import {
    AdditionalInfoBlock, DayForecast, IdleStatusIcon,
    MainWeatherBlock,
    StyledCurrentWeatherWrapper, StyledP, Text, TextBig, TextInfo, WeatherDiv,
    WeatherIcon
} from "./CurrentWeatherCard.styles";

import {getSvgIcon} from "../../utils/svgIconLoader";
import {capitalizeFirstLetter} from "../../utils/capitalizeFirstLetter";
import dayjs from "dayjs";
import {getWeekDay} from "../../utils/getWeekDay";
import {getMonth} from "../../utils/getMonth";
import {SunnyIcon,} from "../../assets/SvgIcons";
import {NearestForecast} from "../NearestForecast/NearestForecast";
import {getTimeOfDayWithTimeZoneOffset} from "../../utils/getTimeOfDayWithTimeZoneOffset";


export const CurrentWeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    const currentWeather = useSelector((state) => state.forecast.locationForecast.current);
    const place = useSelector((state) => state.forecast.descriptionOfPlace);

    if (weatherData.status === 'idle') {
        return (
            <IdleStatusIcon>
                <SunnyIcon/>
            </IdleStatusIcon>
        )
    }

    if (weatherData.status === 'success') {

        return (
            <StyledCurrentWeatherWrapper>

                <MainWeatherBlock>
                    <b><TextBig>{place.split(',')[0]},
                        {getTimeOfDayWithTimeZoneOffset(currentWeather.dt, weatherData.locationForecast.timezone_offset)}
                    </TextBig></b>
                    <b><Text>{getWeekDay(currentWeather.dt)}, {dayjs(currentWeather.dt * 1000).format("DD")}
                        {getMonth(currentWeather.dt)}
                    </Text></b>
                    <WeatherDiv>
                        <WeatherIcon>
                            {getSvgIcon(currentWeather.weather[0].icon)}
                        </WeatherIcon>
                        <StyledP>{Math.round(currentWeather.temp)}°С</StyledP>
                    </WeatherDiv>
                    <b><Text>{capitalizeFirstLetter(currentWeather.weather[0].description)} </Text></b>
                </MainWeatherBlock>

                <AdditionalInfoBlock>
                    <b><DayForecast>
                        <NearestForecast/>
                    </DayForecast></b>
                    <TextInfo>
                        <b><Text> Ветер: {currentWeather.wind_speed} м/с</Text></b>
                        <b><Text>Ощущается как: {Math.round(currentWeather.feels_like)}°С</Text></b>
                        <b> <Text>Влажность: {currentWeather.humidity}%</Text></b>
                    </TextInfo>
                </AdditionalInfoBlock>

            </StyledCurrentWeatherWrapper>)

    } else if (weatherData.status === 'error') {
        return (
            <StyledP>Произошла чудовищная ошибка!</StyledP>
        )
    } else return null
}
