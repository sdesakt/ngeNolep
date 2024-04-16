/*
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

function duplicateEncode(word) {
  // ignore caps, so lowercase all word
  word = word.toLowerCase();

  // make var : result, array to convert to array, and count to check count of every element
  let result = "";
  let array = word.split("");
  let count = 0;

  // double loop, inner loop to check count of element, outer loop to push to result with count reference
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        count++;
      }
    }
    if (count > 1) {
      result += ")";
    } else {
      result += "(";
    }
    // turn count back to 0
    count = 0;
  }
  return result;
}
