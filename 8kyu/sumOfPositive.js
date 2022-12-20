// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY SOLUTUTION :

function positiveSum(arr) {
  let positiveArr = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 0) {
      positiveArr = positiveArr + num;
    }
  }
  return positiveArr;
}
