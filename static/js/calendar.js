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
];

const monthsForData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];

document.addEventListener('DOMContentLoaded', function () {
  // Set date 
  date.setDate(1);

  // Listen for click on prev month
  prevMonth.addEventListener('click', function () {
    date.setMonth(date.getMonth() - 1);
    fillCalendar();
  });

  // Listen for click on next month
  nextMonth.addEventListener('click', function () {
    date.setMonth(date.getMonth() + 1);
    fillCalendar();
  });

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
    days += `<div data-day="${dataAttributeMonth - 1}/${lastDayOfPrevMonth - x + 1}/${date.getFullYear()}" class="prev-date date__emoji"><div>${lastDayOfPrevMonth - x + 1}</div><div></div></div>`;
  }

  // Fill in days of current month
  for (let i = 1; i <= lastDayOfMonth; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div data-day="${dataAttributeMonth}/${i}/${date.getFullYear()}" class="today date__emoji"><div>${i}</div><div></div></div>`;
    } else {
      days += `<div data-day="${dataAttributeMonth}/${i}/${date.getFullYear()}" class="date__emoji"><div>${i}</div><div></div></div>`;
    }
  }

  // Fill in days of next month
  for (let k = 1; k <= nextMonthDays; k++) {
    days += `<div data-day="${dataAttributeMonth + 1}/${k}/${date.getFullYear()}" class="next-date date__emoji"><div>${k}</div><div></div></div>`;
  }

  // Add days to calendar
  calDays.innerHTML = days;

  // Fill calendar with emojis
  document.querySelectorAll(".date__emoji").forEach(function (element) {
    for (let item of dataArray) {
      if (item.date === element.dataset.day) {
        getEmoji = item.emoji;
        emojiImage = "";
        if (getEmoji === 1) {
          emojiImage = `<img src="static/images/emojis/angry.png" style="height: 2rem; width: 2rem;" alt="Angry Face" class="cal__emoji">`;
        } else if (getEmoji === 2) {
          emojiImage = `<img src="static/images/emojis/depressed.png" style="height: 2rem; width: 2rem;"  alt="Sad Face" class="cal__emoji">`;
        } else if (getEmoji === 3) {
          emojiImage = `<img src="static/images/emojis/stressed.png" style="height: 2rem; width: 2rem;"  alt="Stressed Face" class="cal__emoji">`;
        } else if (getEmoji === 4) {
          emojiImage = `<img src="static/images/emojis/content.png" style="height: 2rem; width: 2rem;"  alt="Smiling Face" class="cal__emoji">`;
        } else if (getEmoji === 5) {
          emojiImage = `<img src="static/images/emojis/happy.png" style="height: 2rem; width: 2rem;"  alt="Upside down happy Face" class="cal__emoji">`;
        }
        element.lastChild.innerHTML = emojiImage;
      }

    }
  })
}

let entriesDates = dataArray.map(item => item.date);

calDays.addEventListener('click', (e) => {
  // Check if the date is in the dataArray
  if (entriesDates.includes(e.target.closest("div").dataset.day) ||
    entriesDates.includes(e.target.parentElement.parentElement.dataset.day) ||
    entriesDates.includes(e.target.parentElement.dataset.day)) {
    // loop through dataArray to find the date
    for (let item of dataArray) {
      // Get data for a day
      if (item.date === e.target.closest("div").dataset.day ||
        item.date === e.target.parentElement.parentElement.dataset.day ||
        item.date === e.target.parentElement.dataset.day
      ) {
        dateNote = item.date;
        getNote = item.note;
        getEmoji = item.emoji;
        emojiImage = "";
        // Check if emoji is 1, 2, 3, 4, or 5 and set emoji image
        if (getEmoji === 1) {
          emojiImage = `<img src="static/images/emojis/angry.png" alt="Angry Face">`;
        } else if (getEmoji === 2) {
          emojiImage = `<img src="static/images/emojis/depressed.png" alt="Sad Face">`;
        } else if (getEmoji === 3) {
          emojiImage = `<img src="static/images/emojis/stressed.png" alt="Stressed Face">`;
        } else if (getEmoji === 4) {
          emojiImage = `<img src="static/images/emojis/content.png" alt="Smiling Face">`;
        } else if (getEmoji === 5) {
          emojiImage = `<img src="static/images/emojis/happy.png" alt="Upside down happy Face">`;
        }
        // Set the date, emoji and note
        document.querySelector(".note__container").style.display = "flex";
        document.querySelector(".note__container--date").textContent = dateNote;
        document.querySelector(".note__container--emoji").innerHTML = emojiImage;
        // Check if note is empty and set note
        if (getNote !== "") {
          document.querySelector(".note__container--text").textContent = `" ${getNote} "`;
        } else {
          document.querySelector(".note__container--text").textContent = `You didn't write anything for this day.`;
          ``;
        }
      }
    }
    // Hide note if the date is not in the dataArray
  } else {
    document.querySelector(".note__container").style.display = "none";
  }
});