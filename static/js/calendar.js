// Variables:
const date = new Date();
const calMonth = document.querySelector('.date-month');
const calDay = document.querySelector('.date-day');
const calDays = document.querySelector('.date-days');
const month = date.getMonth() + 1;
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

const monthsForData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

document.addEventListener('DOMContentLoaded', function () {
  // Set date 
  date.setDate(1);

  // Listen for click on prev month
  prevMonth.addEventListener('click', function () {
    date.setMonth(date.getMonth() - 1);
    fillCalendar();
  })

  // Listen for click on next month
  nextMonth.addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1);
    fillCalendar();
  })

  // Fill calendar on page load
  fillCalendar();
});


const fillCalendar = function () {

  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextMonthDays = 7 - lastDayIndex - 1;

  // Set month and day
  calMonth.textContent = months[date.getMonth()];
  dataAttributeMonth = monthsForData[date.getMonth()]
  calDay.textContent = date.toDateString();

  // Create days
  let days = "";

  // Fill in days of previous month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div data-day="${dataAttributeMonth - 1}/${lastDayOfPrevMonth - x + 1}/${date.getFullYear()}" class="prev-date">${lastDayOfPrevMonth - x + 1}</div>`;
  }

  // Fill in days of current month
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div data-day="${dataAttributeMonth}/${i}/${date.getFullYear()}" class="today">${i}</div>`;
    } else {
      days += `<div data-day="${dataAttributeMonth}/${i}/${date.getFullYear()}">${i}</div>`;
    }
  }

  // Fill in days of next month
  for (let k = 1; k <= nextMonthDays; k++) {
    days += `<div data-day="${dataAttributeMonth + 1}/${k}/${date.getFullYear()}" class="next-date">${k}</div>`;
  }

  // Add days to calendar
  calDays.innerHTML = days;
  console.log(calDays);
}