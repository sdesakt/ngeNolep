function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    x[i] = x[i] - "";
    result += x[i];
  }
  return result;
}
