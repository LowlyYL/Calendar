export function newDate(year, month, day) {
   
    let newDay = new Date;
    newDay.setFullYear(year, month, day);

    return newDay
}