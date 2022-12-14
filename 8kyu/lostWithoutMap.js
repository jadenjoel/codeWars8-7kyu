// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// MY SOLUTUTION :

function maps(x) {
  const double = x.map(function (num) {
    return num * 2;
  });
  return double;
}
