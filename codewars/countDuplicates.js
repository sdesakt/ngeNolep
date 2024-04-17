function duplicateCount(text) {
  //! lowercase, convert to array, sort
  text = text.toLowerCase().split("").sort();

  //! make an empty array
  let array = [];

  //! loop if array text length > 1
  while (text.length > 1) {
    //! if right element === one before right element, and doesn't include in array, push to array
    if (text[text.length - 1] === text[text.length - 2] && !array.includes(text[text.length - 1])) {
      array.push(text[text.length - 1]);
    }

    //! delete right element, so loop can end if condition false
    text.pop();
  }
  return array.length;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
