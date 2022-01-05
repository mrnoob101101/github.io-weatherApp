export function getMonth(dateTimestamp) {
  const date = new Date(dateTimestamp * 1000);
  return date.toLocaleString('default', { month: 'short' });
}
