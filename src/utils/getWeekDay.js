export function getWeekDay(dateTimestamp) {
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[new Date(dateTimestamp * 1000).getDay()];
}
