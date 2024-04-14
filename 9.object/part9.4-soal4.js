/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  // you can only write your code here!
  //!loop biasa
  for (let i = 0; i < num.length; i++) {
    //!jika menemukan a
    if (num[i] === "a") {
      for (let j = i + 1; j < i + 4; j++) {
        //!jika jarak 3 benar-benar tidak ada a atau b
        if (num[j] !== "a" || num[j] !== "b") {
          //!jika jarak 3 karakter ada b
          if (num[i + 4] === "b") {
            return true;
          }
        }
      }
      //!sama seperti di atas, tapi versi menemukan b
    } else if (num[i] === "b") {
      for (let j = i + 1; j < i + 4; j++) {
        if (num[j] !== "a" || num[j] !== "b") {
          if (num[i + 4] === "a") {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
