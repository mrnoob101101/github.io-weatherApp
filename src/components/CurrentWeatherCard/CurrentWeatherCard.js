import {useSelector} from "react-redux";
import React from "react";
import {StyledCurrentWeatherWrapper, WeatherIcon} from "./CurrentWeatherCard.styles";
import {
    ClearNight,
    Clouds,
    HardClouds, Mist,
    PartlyClouds,
    PartlyCloudsNight,
    Rain, RainWithMoon,
    RainWithSun, Snow,
    SunnyDay, Thunder
} from "../../assets/SvgIcons";
import {getSvgIcon, icons} from "../../utils/svgIconLoader";



export const CurrentWeatherCard = () => {
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
                {/*<div>
                    <img
                        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`}
                        alt="weatherImage"
                    />
                </div>*/}
                <WeatherIcon>
                    {getSvgIcon(currentWeather.weather[0].icon)}
                </WeatherIcon>
                <span>{currentWeather.temp}°С</span>
                <span>Скорость ветра: {currentWeather.wind_speed} м/с</span>
                <span>Ощущается как: {currentWeather.feels_like}°С</span>

               {/* <SunnyDay/>
                <ClearNight/>
                <PartlyClouds/>
                <PartlyCloudsNight/>
                <Clouds/>
                <HardClouds/>
                <Rain/>
                <RainWithSun/>
                <RainWithMoon/>
                <Thunder/>
                <Snow/>
                <Mist/>*/}



            </StyledCurrentWeatherWrapper>)
    } else return null

}
