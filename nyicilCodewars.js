// Sum Numbers
function sum(numbers) {
  "use strict";
  let result =
    numbers.length === 0
      ? 0
      : numbers.reduce((total, num) => {
          return total + num;
        }, 0);
  return result;
}
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
