export function getMonth(dateTimestamp) {
    const date = new Date(dateTimestamp * 1000);
    const month = date.toLocaleString('default', {month: 'short'});
    console.log(month);
    return month;
}
