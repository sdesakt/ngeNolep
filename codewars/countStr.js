function count(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (!result.hasOwnProperty(string[i])) {
      result[string[i]] = 1;
    } else {
      result[string[i]] += 1;
    }
  }
  return result;
}

console.log(count(""));
console.log(count("a"));
console.log(count("ab"));
console.log(count("aba"));
console.log(count("ABC"));
