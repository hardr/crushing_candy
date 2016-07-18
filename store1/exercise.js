var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
store1["2015-01-08"][0][1];

// How would you access how many 'Mint Wafers' were sold on January 7th?
// none

// Produce an array of the date keys in store1's data.
Object.keys(store1);

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function whichCandies(object, date) {
  var candyArray = [];
  for (var i = 0; i < object["2015-01-" + date].length; i++) {
  candyArray.push(object["2015-01-" + date][i][0]);
  }
  return candyArray;
}

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function howManyCandy(object, date) {
  var count = 0;
  for (var i = 0; i < object["2015-01-" + date].length; i++) {
  count += object["2015-01-" + date][i][2];
  }
  return count;
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
var store1Dates = Object.keys(store1);

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
function printDateData(object, dates) {
  for (var i = 0; i < dates.length; i++) {
  console.log(object[dates[i]]);
  }
}

// Use a loop to calculate the total number of candies sold at store1.
function totalCandy(store) {
  var count = 0;
  for (var key in store) {
    for (var j = 0; j < store[key].length; j++) {
      count += store[key][j][2];
    }
  }
  return count;
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
// Outside the for in loop so it didn't reset

// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
var store1TenthCandies = whichCandies(store1, "10");
