import { createSelector } from '@reduxjs/toolkit';

const selectHourlyForecast = state => state.forecast.locationForecast?.hourly;
export const selectHours = createSelector(selectHourlyForecast, hourly =>
  hourly.filter((item, index) => {
    return index === 6 || index === 12 || index === 18 || index === 24;
  })
);
