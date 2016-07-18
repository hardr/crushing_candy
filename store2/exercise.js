var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
  var bananaDates = store2["sale dates"]["Banana Bunches"];

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
//.length

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?
var mintPrice = store2["inventory prices"]["Mint Wafers"];
mintPrice = 9;
//No, because mintPrice is only grabbing the value of Mint Wafers, it isn't THE value for Mint Wafers.

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
var sellPeanuts = store2["sale dates"]["Peanut Butter Buttered Peanuts"];
store2["sale dates"]["Caramel Twists"].pop();

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
var caramelSales = {};

function candyDates(candy) {
  var count = 1;
  for (var i = 0; i < store2["sale dates"][candy].length; i++) {
    if (store2["sale dates"][candy][i] === store2["sale dates"][candy][i - 1]) {
      count++;
    } else {
      count = 1;
    }
    caramelSales[store2["sale dates"][candy][i]] = count;
  }
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?
//
var dateTracking = {};

function saleCount(store) {
  var count = 1;

  for (var key in store2["sale dates"]) {
    for (var i = 0; i < store2["sale dates"].length; i++) {
      if (key[i] === key[i - 1]) {
        count++;
      }
    }
    dateTracking[[key][i]] = count;
  }
}

saleCount(store2);
console.log(dateTracking);

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
