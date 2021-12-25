import {useSelector} from "react-redux";
import React from "react";
import {
    AdditionalInfoBlock,
    MainWeatherBlock,
    StyledCurrentWeatherWrapper, StyledP, Text, TextBig, WeatherDiv,
    WeatherIcon
} from "./CurrentWeatherCard.styles";

import {getSvgIcon} from "../../utils/svgIconLoader";
import {capitalizeFirstLetter} from "../../utils/capitalizeFirstLetter";
import dayjs from "dayjs";
import {getWeekDay} from "../../utils/getWeekDay";
import {getMonth} from "../../utils/getMonth";


export const CurrentWeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    console.log(weatherData.status);

    const currentWeather = useSelector((state) => state.forecast.locationForecast.current);
    const place = useSelector((state) => state.forecast.descriptionOfPlace);


    if (weatherData.status === 'success') {


        return (
            <StyledCurrentWeatherWrapper>
                <MainWeatherBlock>
                    <b><TextBig>{place.split(',')[0]}</TextBig></b>
                    <b><Text>{getWeekDay(currentWeather.dt)}, {dayjs(currentWeather.dt * 1000).format("DD")}
                        {getMonth(currentWeather.dt)}</Text></b>
                    <WeatherDiv>
                        <WeatherIcon>
                            {getSvgIcon(currentWeather.weather[0].icon)}
                        </WeatherIcon>
                        <StyledP>{Math.round(currentWeather.temp)}°С</StyledP>

                    </WeatherDiv>
                    <b><Text>{capitalizeFirstLetter(currentWeather.weather[0].description)} </Text></b>
                </MainWeatherBlock>
                <AdditionalInfoBlock>
                    <b><Text>Скорость ветра: {currentWeather.wind_speed} м/с</Text></b>
                    <b><Text>Ощущается как: {Math.round(currentWeather.feels_like)}°С</Text></b>
                    <b> <Text>Влажность: {currentWeather.humidity}%</Text></b>
                </AdditionalInfoBlock>


            </StyledCurrentWeatherWrapper>)
    } else return null

}
