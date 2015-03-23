// Simple utilities for setting a date-specific message in a page element.

function simplePluralize(str, quantity) {
  if (quantity == 1 || quantity == -1) {
    return str;
  }
  return str + "s";
}

function differenceInDays(dateA, dateB) {
  // Copy these instead of mutating the objects.
  date1 = new Date(dateA)
  date2 = new Date(dateB)
  date1.setHours(0,0,0,0);
  date2.setHours(0,0,0,0);

  var date1InMilliseconds = date1.getTime();
  var date2InMilliseconds = date2.getTime();

  var millisecondsInDay = 1000*60*60*24;
  var millisecondsBetweenDates = date1InMilliseconds - date2InMilliseconds;
  return Math.floor(millisecondsBetweenDates/millisecondsInDay); 
}

function getDateSpecificMessage(daysBeforeEvent) {
  if (daysBeforeEvent == 0) {
    return "Today is the big day!";
  } else if (daysBeforeEvent > 0) {
    return daysBeforeEvent + " " + simplePluralize("day", daysBeforeEvent) + " to go!";
  } else {
    return -1*daysBeforeEvent + " " + simplePluralize("day", daysBeforeEvent) + " of wedded bliss and counting!";
  }
}

function setMessage(element, message) {
  element.innerHTML = " - " + message;
}

var targetDate = new Date('June, 13, 2015');
var currentDate = new Date();
var daysBeforeEvent = differenceInDays(targetDate, currentDate);
var message = getDateSpecificMessage(daysBeforeEvent);
var countdownElement = document.getElementById('countdown');
setMessage(countdownElement, message)

function test(expected, actual) {
  if (expected == actual) {
  	console.log(true);
  } else {
  	console.log("false: " + actual + " should have been " + expected);
  }
}

// Some basic tests to check any changes for regressions.
// Uncomment, load the page, and check the js console for results.
/*
test("2 days to go!", getDateSpecificMessage(2));
test("1 day to go!", getDateSpecificMessage(1));
test("Today is the big day!", getDateSpecificMessage(0));
test("1 day of wedded bliss and counting!", getDateSpecificMessage(-1));
test("2 days of wedded bliss and counting!", getDateSpecificMessage(-2));

var march22 = new Date("2015-03-22 00:00:00.0");
test(1, differenceInDays(march22, new Date("2015-03-21 03:47:00.0")));
test(0, differenceInDays(new Date("2015-03-22 15:47:00.0"), march22));
test(-1, differenceInDays(march22, new Date("2015-03-23 00:00:00.0")));
*/
