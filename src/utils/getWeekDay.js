import {nanoid} from "@reduxjs/toolkit";
import {getSvgIcon} from "./svgIconLoader";
import {ForecastIcon} from "../components/DailyForecastCard/DailyForecast.styles";
import React from "react";

export function getWeekDay(dateTimestamp) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    console.log(new Date(dateTimestamp * 1000))
    return days[new Date(dateTimestamp * 1000).getDay()];
}

export function getTimeOfDayWithTimeZoneOffset(dateTimeStamp, timeZoneOffset) {

    /*new Date(obj.dt*1000-(obj.timezone*1000))*/
    const hours = new Date(dateTimeStamp * 1000 + (timeZoneOffset * 1000) - 7200 * 1000).getHours();

    console.log(hours);
    if (hours >= 5 && hours < 11) {
        return (" Утро");
        /*console.log("Утро");*/
    } else if (hours >= 11 && hours < 17) {
        return (" День");
        /*console.log("День");*/
    } else if (hours >= 17 && hours < 23) {
        return (" Вечер");
        /*console.log("Вечер");*/
    } else return (" Ночь");
    /*console.log("Ночь")*/
}

export function getTimeZonedForecastForNextDay(hourlyWeatherArray, timeZoneOffset) {
    const filtered = hourlyWeatherArray.filter((item, index) => {
        return (
            index === 6 ||
            index === 12 ||
            index === 18 ||
            index === 24
        )
    })
    return filtered.map((item) => {
        return (
            <div key={nanoid()}>{getTimeOfDayWithTimeZoneOffset(item.dt, timeZoneOffset)}
                <div>{item.temp}°</div>
                <ForecastIcon>
                    {getSvgIcon(item.weather[0].icon)}
                </ForecastIcon>
            </div>

        )
    })
}

