function factors(n) {
  //make result format
  let result = [[], []];
  for (let i = 2; i <= n; i++) {
    //search the factorial
    if (n % i === 0) {
      //if squared root is a real number
      if (Math.sqrt(i) % 1 === 0) {
        result[0].push(Math.sqrt(i));
      }
      //if cubed root is a real number
      if (Math.cbrt(i) % 1 === 0) {
        result[1].push(Math.cbrt(i));
      }
    }
  }
  return result;
}

console.log(factors(80)); // [[2, 4], [2]], `factors(80)`);
console.log(factors(100)); // [[2, 5, 10], []], `factors(100)`);
console.log(factors(5)); //[[], []], `factors(5)`);
console.log(factors(120)); // [[2], [2]], `factors(120)`);
console.log(factors(18)); // [[3], []], `factors(18)`);
console.log(factors(8)); // [[2], [2]], `factors(8)`);
