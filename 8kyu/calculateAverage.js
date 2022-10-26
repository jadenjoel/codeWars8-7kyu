// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// MY SOLUTION:

function findAverage(array) {
  if (array < 1) {
    return 0;
  }

  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    count = count + 1;
  }
  return sum / count;
}
