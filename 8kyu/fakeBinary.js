// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// MY SOLUTION:

function fakeBin(x) {
  let newStr = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newStr = newStr + 0;
    } else newStr = newStr + 1;
  }
  return newStr;
}
