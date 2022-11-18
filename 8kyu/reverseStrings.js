// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// MY SOLUTUTION :

function solution(str) {
  let newArray = str.split("");
  let newArrayReverse = newArray.reverse();
  let joinArray = newArrayReverse.join("");
  return joinArray;
}
solution("Hello");
