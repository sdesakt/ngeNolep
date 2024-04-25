/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  //code here
  //! kalau arr kosong
  if (arr.length <= 0) {
    return [];
  }

  //! bikin var temp sama array
  let tempArray = [];
  let array = [];

  //! tempArray untuk nggabungin semua arr
  for (let i = 0; i < arr.length; i++) {
    tempArray.push(...arr[i]);
  }

  //! array untuk ngilangin " "
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === " ") {
      continue;
    }
    array.push(tempArray[i]);
  }

  //! sort
  array = array.sort((a, b) => a - b);

  //! var hasil
  let result = [];

  for (let i = 0; i < array.length; i++) {
    //! kalau iterasi teakhir, return result
    if (i === array.length - 1) {
      return result;
    }

    //! kalau array selanjutnya bukan array sekarang + 1, tambahkan di array selanjutnya : array sekarang + 1
    if (array[i + 1] != array[i] + 1) {
      array.splice(i + 1, 0, array[i] + 1);
      result.push(array[i] + 1);
    }
  }
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
