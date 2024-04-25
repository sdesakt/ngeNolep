/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/

function squareNumber(num) {
  //code here
  //! input < 3
  if (num < 3) {
    return "Minimal input adalah 3";
  }

  //! var number = ngisi semua hasil angka, var array = hasil array berupa angka
  let number = 1;
  let array = [];

  for (let i = 1; i <= num; i++) {
    //! subArray = menampung kumpulan sebagian angka di dalam array
    let subArray = [];
    for (let j = 1; j <= num; j++) {
      //! kalau push array ke-n, di mana n genap atau nol, push (urut dari awal)
      if (array.length === 0 || array.length % 2 === 0) {
        if (number % 4 === 0) {
          subArray.push("#");
        } else if (number % 2 === 0) {
          subArray.push("0");
        } else {
          subArray.push("x");
        }
        number++;
      } else {
        //! kalau push array ke-n, di mana n ganjil, shift (urut dari kanan)
        if (number % 4 === 0) {
          subArray.unshift("#");
        } else if (number % 2 === 0) {
          subArray.unshift("0");
        } else {
          subArray.unshift("x");
        }
        number++;
      }
    }
    //! push semua subArray ke array
    array.push(subArray);
  }

  for (let i = 0; i < array.length; i++) {}
  return array;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
