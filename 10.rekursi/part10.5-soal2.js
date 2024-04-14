/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  //!bikin konstanta manual. blm tau ada cara selain gini atau nggak. samain index vocal dan vocalChange nya
  const vocal = "aiueoAIUEO";
  const vocalChange = "bjvfpBJVFP";
  //!hasil algoritma nya dimasukin ke array sementara
  arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      //!kalau nemu huruf vocal, jadiin ke vocalChange sesuai index
      if (str[i] === vocal[j]) {
        arr.push(vocalChange[j]);
        break;
      }
    }
    //!ini kalau nggak termasuk huruf vocal, push langsung
    if (!vocal.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  return arr.join("");
}

function reverseWord(str) {
  //code di sini
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function setLowerUpperCase(str) {
  //code di sini
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i].toUpperCase()) {
      newStr += str[i].toUpperCase();
      continue;
    }
    if (str[i] < str[i].toLowerCase()) {
      newStr += str[i].toLowerCase();
      continue;
    }
    newStr += str[i];
  }
  return newStr;
}

function removeSpaces(str) {
  //code di sini
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  //code di sini
  const result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  if (result.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
