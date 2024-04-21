function piramid2(num) {
  //code here
  let result = "";
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      result += i;
    }
    result += "\n";

    if (i === 1) {
      for (let k = 2; k <= num; k++) {
        for (let l = 1; l <= k; l++) {
          result += k;
        }
        result += "\n";
      }
    }
  }
  return result;
}

console.log(piramid2(5));
console.log(piramid2(4));

/*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */
