/* 
Budget app

todo:
- get sum of array and display total in  #totalText
 *only show 2 decimals.
-list out array items to the history section and display red or blue if negative or positive.
-make functions that takes the
-Store everything in local storage?

*/

// declarations
let myarray = [];
let count = 0;
let arrayOfNumbers = [];
let total = 0;
//process inputs
//Expenses
$("#btnSubtract").click(function () {
  myarray.push($("#subtract").val());
  arrayOfNumbers = myarray.map(Number);
  total = sumArray(arrayOfNumbers);
  $("#totalText").text(total);
});
//income
$("#btnAdd").click(function () {
  myarray.push($("#add").val());
  arrayOfNumbers = myarray.map(Number);
  total = sumArray(arrayOfNumbers);
  $("#totalText").text(total);
});

//sum for total
var sumArray = function() {
  function add(a, b) {
      return a + b;
  }

  return function(arr) {
      return arr.reduce(add);
  };
}();



//add total to balance

//dissect this
/*jQuery.validator.addMethod('negativeNumber', function(value, element) {
  return this.optional(element) || (+value < 0);
}, 'Please enter a negative number'); */
