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
import {getTimeOfDayWithTimeZoneOffset, getTimeZonedForecastForNextDay, getWeekDay} from "../../utils/getWeekDay";
import {getMonth} from "../../utils/getMonth";
import {nanoid} from "@reduxjs/toolkit";


export const CurrentWeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    console.log(weatherData.status);
    const currentWeather = useSelector((state) => state.forecast.locationForecast.current);
    const place = useSelector((state) => state.forecast.descriptionOfPlace);
    const hourlyWeather = useSelector((state) => state.forecast.locationForecast.hourly)

    if (weatherData.status === 'success') {

        /*getTimeOfDay( 1640539118/!*currentWeather.dt*!/);
        new Date(currentWeather.dt * 1000).getHours()
        console.log(new Date(currentWeather.dt * 1000).getHours());*/

        /*getTimeOfDayWithTimeZoneOffset( currentWeather.dt, weatherData.locationForecast.timezone_offset);*/
        /*getTimeZonedForecast(hourlyWeather,weatherData.locationForecast.timezone_offset);*/
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
                    <b><Text>Скорость ветра: {currentWeather.wind_speed} м/с</Text></b>
                    <b><Text>Ощущается как: {Math.round(currentWeather.feels_like)}°С</Text></b>
                    <b> <Text>Влажность: {currentWeather.humidity}%</Text></b>
                    <WeatherDiv> {getTimeZonedForecastForNextDay(hourlyWeather, weatherData.locationForecast.timezone_offset)}</WeatherDiv>
                </AdditionalInfoBlock>


              {/*  {hourlyWeather.map((item, index) => {
                if (index === 5 || 10 || 15 || 20) {
                    return (

                        <span key={nanoid()}> {getTimeOfDayWithTimeZoneOffset(item.dt,weatherData.locationForecast.timezone_offset)}</span>

                    )
                }
            })}*/}


            </StyledCurrentWeatherWrapper>)
    } else return null

}
