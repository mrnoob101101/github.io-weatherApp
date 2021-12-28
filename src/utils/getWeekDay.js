import {nanoid} from "@reduxjs/toolkit";
import {getSvgIcon} from "./svgIconLoader";
import {ForecastIcon} from "../components/DailyForecastCard/DailyForecast.styles";


export function getWeekDay(dateTimestamp) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    console.log(new Date(dateTimestamp * 1000))
    return days[new Date(dateTimestamp * 1000).getDay()];
}



/*export function getTimeZonedForecastForNextDay(hourlyWeatherArray, timeZoneOffset) {
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
}*/

