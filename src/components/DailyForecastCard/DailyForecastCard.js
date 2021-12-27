import {useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {Card, DailyForecastWrapper, DateDiv, ForecastIcon, Max} from "./DailyForecast.styles";
import dayjs from "dayjs";
import React from "react";
import {getSvgIcon} from "../../utils/svgIconLoader";
import {getWeekDay} from "../../utils/getWeekDay";
import {getMonth} from "../../utils/getMonth";


export const DailyForecastCard = () => {

    /*const handleSelector = (state) => state.forecast.locationForecast.daily;*/

    const weatherData = useSelector((state) => state.forecast);


    /*const data2 = new Date(1640080800 * 1000);
    console.log(data2);*/


    /*const date = dayjs(1640080800).format("DD");
    console.log(date);*/
    /*const currentWeather = useSelector((state) => state.forecast.locationForecast.current);*/
    const dailyForecast = useSelector((state) => state.forecast.locationForecast.daily);
    if (weatherData.status === 'success') {

        return (
            <b><DailyForecastWrapper>
                {dailyForecast.slice(0, 6).map((item) => {
                    return (<Card key={nanoid()}>
                        <DateDiv>
                            {getWeekDay(item.dt)}<br/>
                            {dayjs(item.dt * 1000).format("DD")} {getMonth(item.dt)}
                        </DateDiv>
                        <div>
                            <Max> {Math.round(item.temp.max)}°С </Max>
                            <p> {Math.round(item.temp.min)}°С </p>
                        </div>
                        <ForecastIcon>
                            {getSvgIcon(item.weather[0].icon)}
                        </ForecastIcon>

                    </Card>)
                })}
            </DailyForecastWrapper></b>

        )

    } else return null

}
