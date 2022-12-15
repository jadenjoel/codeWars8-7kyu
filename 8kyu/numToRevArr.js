// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// MY SOLUTUTION :

function digitize(num) {
  const num1 = num.toString();
  const numArr = num1.split("");
  const revArr = numArr.reverse();
  const toNum = revArr.map(function (str) {
    return parseInt(str);
  });
  return toNum;
}
