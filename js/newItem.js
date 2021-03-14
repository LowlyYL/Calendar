export function newItem(day) {
    let newDay = {
        number: 0,
        dayOfWeek: '',
    }

    newDay.number = day.getDate()
    newDay.dayOfWeek = day.getDay()
    
    return newDay
}