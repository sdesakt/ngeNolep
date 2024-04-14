/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  if (angka <= 1) {
    return 2;
  }
  //!cek semua faktorial
  let allFactorial = [];
  cek = 1;
  while (cek <= angka) {
    if (angka % cek === 0) {
      allFactorial.push(cek);
    }
    cek++;
  }

  //!pasangkan faktorial (index awal dengan index akhir), jadikan 1 elemen array, convert ke string
  let factorialCouple = [];
  for (let i = 0; i < allFactorial.length / 2; i++) {
    factorialCouple.push([allFactorial[i] + "" + allFactorial[allFactorial.length - i - 1]]);
  }

  //!cari length terkecil
  let factorial = "";
  let factorialLength = 999;
  for (let k = 0; k < factorialCouple.length; k++) {
    factorial = factorialCouple[k][0] + "";
    if (factorial.length < factorialLength) {
      factorialLength = factorial.length;
    }
  }

  return factorialLength;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
