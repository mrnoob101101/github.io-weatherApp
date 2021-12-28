export function getTimeOfDayWithTimeZoneOffset(dateTimeStamp, timeZoneOffset) {

    const hours = new Date(dateTimeStamp * 1000 + (timeZoneOffset * 1000) - 7200 * 1000).getHours();

    if (hours >= 5 && hours < 11) {
        return (" Утро");

    } else if (hours >= 11 && hours < 17) {
        return (" День");

    } else if (hours >= 17 && hours < 23) {
        return (" Вечер");

    } else return (" Ночь");

}
