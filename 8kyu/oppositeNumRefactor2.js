// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// MY SOLUTUTION :

function opposite(number) {
  let x = number;
  if (number > 0) {
    x = -Math.abs(number);
  } else if (number < 0) {
    x = Math.abs(number);
  }
  return x;
}
