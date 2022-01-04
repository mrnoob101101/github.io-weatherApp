import {useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {Card, DailyForecastWrapper, DateDiv, ForecastIcon, Max} from "./DailyForecast.styles";
import dayjs from "dayjs";
import React from "react";
import {getSvgIcon} from "../../utils/svgIconLoader";
import {getWeekDay} from "../../utils/getWeekDay";
import {getMonth} from "../../utils/getMonth";


export const DailyForecastCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    const dailyForecast = useSelector((state) => state.forecast.locationForecast.daily);

    if (weatherData.status === 'success') {
        return (
            <b><DailyForecastWrapper>
                {dailyForecast.slice(1, 7).map((item) => {
                    return (
                        <Card key={item.dt + item.temp.max}>
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
