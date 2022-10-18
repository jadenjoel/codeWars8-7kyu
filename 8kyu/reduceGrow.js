// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// MY SOLUTION:

function grow(x) {
  let newArr = 1;
  for (let i = 0; i < x.length; i++) {
    newArr = newArr * x[i];
  }
  return newArr;
}
