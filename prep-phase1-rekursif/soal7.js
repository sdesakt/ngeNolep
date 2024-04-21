/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  //! var equation tapi string bentuknya
  let string = equation + "";

  //! var element paling awal
  let firstNum = string[0];

  //! var firstNum dikali 10 pangkat n, n nya adalah length string dikurangi 1
  let leftEquation = firstNum * 10 ** (string.length - 1);

  //! kalau equation udah 0, stop rekursif
  if (equation === 0) {
    return "";
  }

  //! kalau equation habis dibagi leftEquation, return leftEquation saja, stop rekursif
  if (equation % leftEquation === 0) {
    return leftEquation;
  }

  //! sisanya, return type string, rekursifkan lagi
  return `${leftEquation} + ${parseNumber(equation - leftEquation)}`;
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
