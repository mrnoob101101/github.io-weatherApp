import {useSelector} from "react-redux";
import React from "react";
import {StyledCurrentWeatherWrapper} from "./WeatherCard.styles";
import {nanoid} from "@reduxjs/toolkit";

export const WeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    console.log(weatherData.status);

    const handleSelector = (state) => state.forecast.locationForecast.daily;

    const dailyForecast = useSelector(handleSelector);
    const currentWeather = useSelector((state) => state.forecast.locationForecast.current);
    const place = useSelector((state) => state.forecast.descriptionOfPlace);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function getWeekDay(dateTimestamp) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        console.log(new Date(dateTimestamp * 1000))
        return days[new Date(dateTimestamp * 1000).getDay()];
    }

    const a = new Date(1639540413);
    console.log(a);


    if (weatherData.status === 'success') {
        const descriptionOfWeatherFormatted = capitalizeFirstLetter(currentWeather.weather[0].description);

        /*const weekDay1 = getWeekDay(weatherData.locationForecast.daily[1].dt);
        const weekDay2 = getWeekDay(weatherData.locationForecast.daily[2].dt);
        const weekDay3 = getWeekDay(weatherData.locationForecast.daily[3].dt);
        const weekDay4 = getWeekDay(weatherData.locationForecast.daily[4].dt);
        const weekDay5 = getWeekDay(weatherData.locationForecast.daily[5].dt);*/
        /* {todoList.map((item) => (
             <NewTask task={item} key={item.id}/>
         ))}*/

        const days = dailyForecast.map((item) => getWeekDay(item.dt));

        console.log(place);

        return (
            <StyledCurrentWeatherWrapper>
                <span>{place}</span>
                <span>{descriptionOfWeatherFormatted} </span>
                <div>
                    <img
                        src={`http://openweathermap.org/img/wn/${weatherData.locationForecast.current.weather[0].icon}@4x.png`}
                        alt="weatherImage"
                    />
                </div>
                <span>Температура:{weatherData.locationForecast.current.temp}°С</span>
                {dailyForecast.slice(0, 6).map((item) => {
                    return (<div key={nanoid()}>{getWeekDay(item.dt)} {item.temp.day}°С</div>)
                })}


            </StyledCurrentWeatherWrapper>)
    } else {
        return null
    }
}
