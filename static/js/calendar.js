var cal = new CalHeatMap();
// afterLoadData: function(data) { return data; },
// var data = JSON.parse(document.getElementById("mydiv").dataset.geocode);
var data = {
  "1420498800": 20,
  "1420585200": 40,
  "1420671600": 60,
  "1420758000": 1,
  "1421103600": 2,
  "1421190000": 90,
  "1421276400": 1,
  "1421362800": 1,
  "1421622000": 1,
  "1421708400": 1,
  "1422226800": 1,
  "1422313200": 1,
  "1422399600": 2,
  "1422486000": 1,
  "1422572400": 1,
  "1423695600": 3,
  "1424127600": 2,
  "1424214000": 1,
  "1424300400": 3,
  "1424386800": 1,
  "1424646000": 2,
  "1424732400": 1,
  "1424818800": 2,
  "1424905200": 2,
  "1424991600": 1,
  "1425337200": 1,
  "1425855600": 4,
  "1426201200": 2,
  "1426460400": 2,
  "1426546800": 1,
  "1426633200": 2,
  "1426719600": 1,
  "1426806000": 1,
  "1427065200": 1,
  "1427151600": 1,
  "1427238000": 2,
  "1427324400": 1,
  "1427670000": 2,
  "1428361200": 2,
  "1428447600": 2,
  "1428534000": 3,
  "1428620400": 3,
  "1428966000": 2,
  "1429138800": 2,
  "1429225200": 1,
  "1429484400": 2,
  "1429570800": 1,
  "1429657200": 2,
  "1429743600": 2,
  "1429830000": 3,
  "1661385600": 20,
  "1643068800": 5,
  "1643155200": 1,
  "1643241600": 1,
  "1643328000": 2,
  "1643414400": 3,
  "1643500800": 4,
  "1643587200": 5,
  "1651276800": 6, //2022-04-30
};

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
  data: data,
  minDate: new Date(2022, 0),
  maxDate: new Date(2023, 0),
  domainGutter: 0,
  legend: [1, 2, 3, 4, 5, 6],
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



var date = new Date("2022-04-30");
var seconds = date.getTime() / 1000;

console.log(`"${seconds}": 29,`)