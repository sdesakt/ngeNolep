/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  if (text.length <= 0) {
    return 0;
  }

  text = text.toLowerCase().split("");
  text = text.sort();

  let duplicateText = "";
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== duplicateText) {
      if (text[i] === text[i + 1]) {
        duplicateText = text[i];
        count++;
      }
    }
  }
  return count;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
