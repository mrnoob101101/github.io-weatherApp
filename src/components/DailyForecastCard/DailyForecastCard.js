import {useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {DailyForecastWrapper} from "./DailyForecast.styles";

export const DailyForecastCard = () => {

    /*const handleSelector = (state) => state.forecast.locationForecast.daily;*/

    const weatherData = useSelector((state) => state.forecast);

    function getWeekDay(dateTimestamp) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        console.log(new Date(dateTimestamp * 1000))
        return days[new Date(dateTimestamp * 1000).getDay()];
    }

    const dailyForecast = useSelector((state) => state.forecast.locationForecast.daily);
    if (weatherData.status === 'success') {

        return (
            <DailyForecastWrapper>
                {dailyForecast.slice(0, 6).map((item) => {
                    return (<div key={nanoid()}>{getWeekDay(item.dt)}

                        <div>
                            <p>Днём:</p>
                            <p> {item.temp.day}°С </p>
                        </div>
                    </div>)
                })}
            </DailyForecastWrapper>

        )

    } else {
        return null
    }
}
