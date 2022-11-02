// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

// MY SOLUTION:

function noSpace(x) {
  const trimmed = x.split(" ").join("");
  return trimmed;
}
