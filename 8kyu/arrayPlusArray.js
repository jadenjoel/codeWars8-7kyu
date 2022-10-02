// DESCRIPTION:

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// MY SOLUTION:

function arrayPlusArray(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];

  let finalArr = 0;
  for (let i = 0; i < arr3.length; i++) {
    finalArr = finalArr + arr3[i];
  }
  return finalArr;
}
