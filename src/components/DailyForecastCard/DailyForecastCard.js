import {useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {DailyForecastWrapper, MinMax} from "./DailyForecast.styles";
import dayjs from "dayjs";


export const DailyForecastCard = () => {

    /*const handleSelector = (state) => state.forecast.locationForecast.daily;*/

    const weatherData = useSelector((state) => state.forecast);

    function getWeekDay(dateTimestamp) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        console.log(new Date(dateTimestamp * 1000))
        return days[new Date(dateTimestamp * 1000).getDay()];
    }

    function getMonth(dateTimestamp) {
        const date = new Date(dateTimestamp * 1000);
        const month = date.toLocaleString('default', {month: 'short'});
        console.log(month);
        return month;
    }

    /*const data2 = new Date(1640080800 * 1000);
    console.log(data2);*/


    /*const date = dayjs(1640080800).format("DD");
    console.log(date);*/
    /*const currentWeather = useSelector((state) => state.forecast.locationForecast.current);*/
    const dailyForecast = useSelector((state) => state.forecast.locationForecast.daily);
    if (weatherData.status === 'success') {

        return (
            <DailyForecastWrapper>
                {dailyForecast.slice(0, 6).map((item) => {
                    return (<div key={nanoid()}>
                        {getWeekDay(item.dt)}, {dayjs(item.dt * 1000).format("DD")} {getMonth(item.dt)}
                        <MinMax>
                            <div>
                                <p>мин.</p>
                                <p> {item.temp.min}°С </p>
                            </div>
                            <div>
                                <p>макс.</p>
                                <p> {item.temp.max}°С </p>
                            </div>
                        </MinMax>

                    </div>)
                })}
            </DailyForecastWrapper>

        )

    } else return null

}
