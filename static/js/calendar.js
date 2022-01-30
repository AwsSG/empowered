var cal = new CalHeatMap();

// Initiate library
cal.init({
  itemSelector: "#previousSelector-a",
  start: new Date(2022, 0), // January 1, 2022
  range: 3,
  subDomainTextFormat: "%d",
  cellSize: 35,
  cellPadding: 0,
  itemName: ["feeling"],
  domain: "month",
  subDomain: "day",
  data: data222,
  minDate: new Date(2022, 0),
  maxDate: new Date(2023, 0),
  domainGutter: 0,
  legend: [1, 2, 3, 4, 5],
  legendColors: ["#fff", "#232181"],
  legendTitleFormat: {
    lower: "less than {min} {name}",
    inner: "between {down} and {up} {name}",
    upper: "more than {max} {name}"
  },
  previousSelector: "#previousSelector-a-previous",
  nextSelector: "#previousSelector-a-next",
  onClick: function (date, nb) {
    if (nb === null) {
      $("#onClick-placeholder").html(`It was ${date.toLocaleDateString("en-US")}
        when you didn't share your feelings`

      );
    }

    if (nb === 1) {
      $("#onClick-placeholder").html(`"It was ${date.toLocaleDateString("en-US")}
        with 
        <img src="{{ url_for('static', filename='images/emojis/angry.png') }}" alt="angry emoji">
        emoji 
        " <b>" + "Here what notes you have left: " + "</b> <br/>" +
        " <b>" + "{{content fo the post}}" + "</b> "`

      );
    }

  }
});