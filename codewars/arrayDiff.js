/*
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
If a value is present in b, all of its occurrences must be removed from the other:
*/

//!cara lama
// function arrayDiff(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     if (b.length === 0) {
//       return a;
//     }
//     a = a.filter((num) => num !== b[i]);
//   }
//   return a;
// }

//! cara cepat
const arrayDiff = (a, b) => {
  let result = a.filter((num) => !b.includes(num));
  return result;
};

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
