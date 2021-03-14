import {emptyLi} from './emptyLi.js';
import {newDate} from './newDate.js';
import {newItem} from './newItem.js';

let monthInput = document.querySelector('.calendar__month');
let yearInput = document.querySelector('.calendar__year');
let btn = document.querySelector('.calendar__btn');

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

let sunday = document.querySelector('.sunday')
let monday = document.querySelector('.monday')
let tuesday = document.querySelector('.tuesday')
let wednesday = document.querySelector('.wednesday')
let thursday = document.querySelector('.thursday')
let friday = document.querySelector('.friday')
let saturday = document.querySelector('.saturday')

let today = new Date;
let todayNum = today.getDate();
let todayMonth = today.getMonth();
let todayYear = today.getFullYear();

let arrDaysOfMonth = [];
let arrOfThisMonth = [];
let arrOfMonths = ['January', 'February', 'March', 'April', 'May', 'June',
 'July', 'August', 'September', 'October', 'November', 'December'];

//function
function newMonth() {
    
    arrDaysOfMonth = [];

    let monthValue = monthInput.value;
    let yearValue = yearInput.value;

    for(let i = 1; i < 32; i++) {
        let dayOfMonth = newDate(yearValue, (monthValue - 1), i);
        arrDaysOfMonth.push(dayOfMonth)
    }

    arrOfThisMonth = [];

    arrOfThisMonth = arrDaysOfMonth
        .filter(item => arrDaysOfMonth[0].getMonth() === item.getMonth())
        .map(item => newItem(item));

    [...document.querySelectorAll('ul > li')].forEach(item => item.remove());
        
    weekDay(arrOfThisMonth)
}

function weekDay(arr) {
    arr.forEach(day => {
        let li = document.createElement('li')
        li.classList.add('day')
        li.innerText = day.number;

        if(day === arr[0]) {
            if(day.dayOfWeek === 0) {
                sunday.append(li);
            }
    
            if(day.dayOfWeek === 1) {
                monday.append(li);
            }
    
            if(day.dayOfWeek === 2) {
                tuesday.append(li);
            }
    
            if(day.dayOfWeek === 3) {
                wednesday.append(li);
            }
    
            if(day.dayOfWeek === 4) {
                thursday.append(li);
            }
    
            if(day.dayOfWeek === 5) {
                friday.append(li);
            }
    
            if(day.dayOfWeek === 6) {
                saturday.append(li);
            }

            if(day.dayOfWeek === 1) {
                sunday.append(emptyLi());
            } else if (day.dayOfWeek === 2) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
            } else if (day.dayOfWeek === 3) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
            } else if (day.dayOfWeek === 4) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
            } else if (day.dayOfWeek === 5) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
                thursday.append(emptyLi());
            } else if (day.dayOfWeek === 6) {
                sunday.append(emptyLi());
                monday.append(emptyLi());
                tuesday.append(emptyLi());
                wednesday.append(emptyLi());
                thursday.append(emptyLi());
                friday.append(emptyLi());
            }


        } else {
            if(day.dayOfWeek === 0) {
                sunday.append(li);
            }
    
            if(day.dayOfWeek === 1) {
                monday.append(li);
            }
    
            if(day.dayOfWeek === 2) {
                tuesday.append(li);
            }
    
            if(day.dayOfWeek === 3) {
                wednesday.append(li);
            }
    
            if(day.dayOfWeek === 4) {
                thursday.append(li);
            }
    
            if(day.dayOfWeek === 5) {
                friday.append(li);
            }
    
            if(day.dayOfWeek === 6) {
                saturday.append(li);
            }
        }
    });
}

function dayEvent() {
    let date = thisDate()

    if(todayYear === date[1] && todayMonth === date[0]) {
        let collectionLi = document.querySelectorAll('li');
        let arr = [...collectionLi];
        let index = arr.find(item => item.innerText === String(todayNum));
        index.setAttribute('class', 'today')
    }

    if(date[0] === 2) {
        let collectionLi = document.querySelectorAll('li');
        let arr = [...collectionLi];
        let index = arr.find(item => item.innerText === '8');
        index.setAttribute('class', 'Mar8')
    }
}

function thisDate() {
    let thisDateArr = document.querySelector('.thisDate').innerText.split(' ');
    
    let thisMonth = arrOfMonths.findIndex(item => item === thisDateArr[0]);
    let thisYear = thisDateArr[1];

    return [thisMonth, Number(thisYear)]
}

function nextMonth(date) {
    for(let i = 1; i < 32; i++) {
        let dayOfMonth = newDate(date[1], (date[0] + 1), i);
        arrDaysOfMonth.push(dayOfMonth)
    }

    let dateOn = document.querySelector('.thisDate');
    dateOn.innerHTML = '';
    dateOn.innerHTML = `${arrOfMonths[(date[0] + 1)]} ${date[1]}`;

    arrOfThisMonth = [];

    arrOfThisMonth = arrDaysOfMonth
        .filter(item => arrDaysOfMonth[0].getMonth() === item.getMonth())
        .map(item => newItem(item));

    [...document.querySelectorAll('ul > li')].forEach(item => item.remove());
        
    weekDay(arrOfThisMonth);

    dayEvent();
}

function previousMonth(date) {
    for(let i = 1; i < 32; i++) {
        let dayOfMonth = newDate(date[1], (date[0] - 1), i);
        arrDaysOfMonth.push(dayOfMonth)
    }

    let dateOn = document.querySelector('.thisDate');
    dateOn.innerHTML = '';
    dateOn.innerHTML = `${arrOfMonths[(date[0] - 1)]} ${date[1]}`;

    arrOfThisMonth = [];

    arrOfThisMonth = arrDaysOfMonth
        .filter(item => arrDaysOfMonth[0].getMonth() === item.getMonth())
        .map(item => newItem(item));

    [...document.querySelectorAll('ul > li')].forEach(item => item.remove());
        
    weekDay(arrOfThisMonth);

    dayEvent();
}

//Event
btn.addEventListener('click', () => {
    if(monthInput.value <= 12 && monthInput.value >= 1 && yearInput.value > 0) {
        newMonth()
        if(yearInput.value === String(todayYear) && monthInput.value === String(todayMonth + 1)) {
            let collectionLi = document.querySelectorAll('li');
            let arr = [...collectionLi];
            let index = arr.find(item => item.innerText === String(todayNum));
            index.setAttribute('class', 'today')
        }
    
        if(monthInput.value === '3') {
            let collectionLi = document.querySelectorAll('li');
            let arr = [...collectionLi];
            let index = arr.find(item => item.innerText === '8');
            index.setAttribute('class', 'Mar8')
        }

        let thisDate = document.querySelector('.thisDate');
        thisDate.innerText = '';
        let thisMonth = arrOfMonths[(Number(monthInput.value) - 1)];
        thisDate.innerHTML = `${thisMonth} ${yearInput.value}`;
    
        monthInput.value = '';
        yearInput.value = '';
    } else {
        alert('Enter correct data please');
        monthInput.value = '';
        yearInput.value = '';
    }

    document.querySelector('.left-arrow').style = `display: block;`
    document.querySelector('.right-arrow').style = `display: block;`
})

rightArrow.addEventListener('click', () => {
    arrDaysOfMonth = [];

    let date = thisDate()

    if(date[0] === 11) {
        date = [-1, (date[1] + 1)]

        nextMonth(date)
    } else {
        nextMonth(date)
    }
})

leftArrow.addEventListener('click', () => {
    arrDaysOfMonth = [];

    let date = thisDate()
    
    if(date[0] === 0) {
        date = [12, (date[1] - 1)]

        previousMonth(date)
    } else {
        previousMonth(date)
    }
})