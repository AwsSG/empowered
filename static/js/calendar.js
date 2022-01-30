var cal = new CalHeatMap();

// Initiate library
cal.init({
  itemSelector: "#previousSelector-a",
  start: new Date(2022, 0), // January 1, 2022
  range: 12,
  subDomainTextFormat: "%d",
  cellSize: 35,
  cellPadding: 0,
  itemName: ["feeling"],
  domain: "month",
  subDomain: "day",
  data: data222,
  minDate: new Date(2022, 0),
  maxDate: new Date(2023, 0),
  domainGutter: 10,
  domainMargin: [30, 90, 30, 0],
  domainDynamicDimension: true,
  subDomain: "x_day",
  legend: [1, 2, 3, 4, 5],
  legendCellSize: 35,
  legendMargin: [50, 0, 50, 90],
  legendVerticalPosition: "top",
  legendColors: ["#fff", "#232181"],
  legendTitleFormat: {
    lower: "less than {min} {name}",
    inner: "between {down} and {up} {name}",
    upper: "more than {max} {name}"
  },
  previousSelector: "#previousSelector-a-previous",
  nextSelector: "#previousSelector-a-next",
  onClick: function (date, nb) {
    let getNote
    for (let item of dataArray) {
      if (item.date === date.toLocaleDateString("en-US")) {
        getNote = item.note
      }
    }
    if (nb === null) {
      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__text--click">when you haven't left any notes</div>
      `);
    }

    if (nb === 1) {

      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__emoji--click">
        <img src="static/images/emojis/angry.png" alt="angry emoji">
      </div>
      <div class="calendar__text--click">Here what notes you have left:</div>
      <div class="calendar__note--click">" ${getNote} "</div>`);
    }

    if (nb === 2) {
      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__emoji--click">
        <img src="static/images/emojis/depressed.png" alt="depressed emoji">
      </div>
      <div class="calendar__text--click">Here what notes you have left:</div>
      ${getNote}`);
    }

    if (nb === 3) {
      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__emoji--click">
        <img src="static/images/emojis/stressed.png" alt="stressed emoji">
      </div>
      <div class="calendar__text--click">Here what notes you have left:</div>
      ${getNote}`);
    }

    if (nb === 4) {
      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__emoji--click">
        <img src="static/images/emojis/content.png" alt="content emoji">
      </div>
      <div class="calendar__text--click">Here what notes you have left:</div>
      ${getNote}`);
    }

    if (nb === 5) {
      $("#onClick-placeholder").html(`<h3 class="calendar__title--click">
      It was <span>${date.toLocaleDateString("en-US")}</span></h3>
      <div class="calendar__emoji--click">
        <img src="static/images/emojis/happy.png" alt="happy emoji">
      </div>
      <div class="calendar__text--click">Here what notes you have left:</div>
      ${getNote}`);
    }
  }
});