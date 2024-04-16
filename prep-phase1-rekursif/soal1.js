/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

//!ketemu nya awal2 pakai cara non rekursif hehe
// function angkaTerbesar(sentence) {
//   sentence.sort((a, b) => a - b);
//   return sentence[sentence.length - 1];
// }

function angkaTerbesar(sentence) {
  //! kalau [], return -1
  if (sentence.length < 1) {
    return -1;
  }

  //! kalau array 1 elemen, return 1 elemen itu
  if (sentence.length < 2) {
    return sentence[0];
  }

  //! var cuma buat clean code aja
  let right = sentence[sentence.length - 1];
  let testRight = sentence[sentence.length - 2];

  //!nah ini rekursif nya, kalau elemen paling kanan > dari elemen sebelah kirinya pas,
  //! pindahkan ke elemen paling kiri
  if (right > testRight) {
    sentence.unshift(right);
  }

  //! hapus elemen paling kanan, biar berkurang jumlah array nya, trus return fungsi rekursif pakai array baru
  sentence.pop();
  return angkaTerbesar(sentence);
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1
