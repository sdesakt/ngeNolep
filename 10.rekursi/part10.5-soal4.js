/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka.
Function akan me-return nilai total dari digit tersebut dengan menambahkan 
satu per satu angka dari digit paling depan ke paling belakang. 
Wajib menggunakan rekursif untuk berlatih rekursif! 
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
  // you can only write your code here!
  //!kalau 1 digit, yaudah return 1 digit juga
  if (angka < 10) {
    return angka;
  } else {
    //!kalau lebih dari 2 digit, jadiin array (jadiin string trus split), jumlahin
    let arr = (angka + "").split("");
    //!kalau ini jumlahinnya dari belakang pake method pop, bisa juga dari depan pakai method shift
    return parseInt(arr.pop()) + totalDigitRekursif(parseInt(arr.join("")));
  }

  return angka;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
