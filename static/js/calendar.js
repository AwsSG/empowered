var cal = new CalHeatMap();



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


  // considerMissingDataAsZero: 1,

  previousSelector: "#previousSelector-a-previous",
  nextSelector: "#previousSelector-a-next",



  onClick: function (date, nb) {
    $("#onClick-placeholder").html("It was  <b>" +
      date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear() +
      "</b> <br/>with <b>" +
      (nb === null ? "you didn't share your feelings" : nb) +
      "</b> emoji<br/>" +
      " <b>" + "Here what notes you have left: " + "</b> <br/>" +
      " <b>" + "{{content fo the post}}" + "</b> "

    );
  }
});


// $("#minDate-previous").on("click", function (e) {
//   e.preventDefault();
//   if (!cal.previous()) {
//     alert("No more domains to load");
//   }
// });

// $("#minDate-next").on("click", function (e) {
//   e.preventDefault();
//   if (!cal.next()) {
//     alert("No more domains to load");
//   }
// });



var date = new Date("2022-01-30");
console.log(date);
var seconds = date.getTime() / 1000;

console.log(`"${seconds}": 29,`)

console.log(dataSo)