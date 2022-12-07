// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1
// 2
//  +2
// 2
//  +2
// 2
//  =9.

// MY SOLUTUTION :

function squareSum(numbers) {
  let nums = 0;
  for (let i = 0; i < numbers.length; i++) {
    nums = nums + numbers[i] * numbers[i];
  }
  return nums;
}
