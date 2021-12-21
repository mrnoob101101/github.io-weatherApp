import {useSelector} from "react-redux";
import React from "react";
import {StyledCurrentWeatherWrapper} from "./WeatherCard.styles";


export const WeatherCard = () => {
    const weatherData = useSelector((state) => state.forecast);
    console.log(weatherData.status);

    const currentWeather = useSelector((state) => state.forecast.locationForecast.current);
    const place = useSelector((state) => state.forecast.descriptionOfPlace);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (weatherData.status === 'success') {
        const descriptionOfWeatherFormatted = capitalizeFirstLetter(currentWeather.weather[0].description);

        return (
            <StyledCurrentWeatherWrapper>
                <span>{place}</span>
                <span>{descriptionOfWeatherFormatted} </span>
                <div>
                    <img
                        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                        alt="weatherImage"
                    />
                </div>
                <span>Температура:{weatherData.locationForecast.current.temp}°С</span>

            </StyledCurrentWeatherWrapper>)
    } else return null

}
