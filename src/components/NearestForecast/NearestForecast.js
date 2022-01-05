import { ForecastIcon } from '../DailyForecastCard/DailyForecast.styles';
import { getSvgIcon } from '../../utils/svgIconLoader';
import React from 'react';
import { selectHours } from '../../store/weatherForecast.slice/selectors';
import { useSelector } from 'react-redux';
import { getTimeOfDayWithTimeZoneOffset } from '../../utils/getTimeOfDayWithTimeZoneOffset';
import { DivStyled, Temp } from './NearestForecast.styles';

export const NearestForecast = () => {
  const weatherData = useSelector(state => state.forecast);
  const hours = useSelector(state => selectHours(state));
  return hours.map(item => {
    return (
      <DivStyled key={item.dt + item.temp}>
        {getTimeOfDayWithTimeZoneOffset(item.dt, weatherData.locationForecast.timezone_offset)}
        <Temp>{Math.round(item.temp)}°</Temp>
        <ForecastIcon>{getSvgIcon(item.weather[0].icon)}</ForecastIcon>
      </DivStyled>
    );
  });
};
