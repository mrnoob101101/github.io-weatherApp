export function getWeekDay(dateTimestamp) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    console.log(new Date(dateTimestamp * 1000))
    return days[new Date(dateTimestamp * 1000).getDay()];
}
