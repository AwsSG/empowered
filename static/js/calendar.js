// Variables:
const date = new Date();
const calMonth = document.querySelector('.date-month');
const calDay = document.querySelector('.date-day');
const calDays = document.querySelector('.date-days');

// console.log(lastDayOfMonth, lastDayOfPrevMonth, nextMonthDays);

const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');


const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const month = date.getMonth() + 1;
// const firstDayIndex = date.getDay();

// console.log(date, month, firstDayIndex);


document.addEventListener('DOMContentLoaded', function () {
  date.setDate(1);
  prevMonth.addEventListener('click', function () {
    console.log('click')
    date.setMonth(date.getMonth() - 1);
    fillCalendar();
  })
  nextMonth.addEventListener('click', function () {
    console.log('click')
    date.setMonth(date.getMonth() + 1);
    fillCalendar();
  })


  fillCalendar();

});


const fillCalendar = function () {

  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const dayOfWeek = date.getDay();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextMonthDays = 7 - lastDayIndex - 1;


  // Set month and day
  calMonth.textContent = months[month - 1];
  calDay.textContent = date.toDateString();

  // Create days
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${lastDayOfPrevMonth - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let k = 1; k <= nextMonthDays; k++) {
    days += `<div class="next-date">${k}</div>`;
  }

  calDays.innerHTML = days;
  console.log(days)
}