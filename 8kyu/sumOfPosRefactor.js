// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY SOLUTUTION :

function positiveSum(arr) {
  //we already have an array of numbers//take out negatives
  let newArray = arr.filter(function (x) {
    return x > -1;
  });
  //add those numbers together
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return sum;
}
