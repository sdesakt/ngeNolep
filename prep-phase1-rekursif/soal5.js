/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
  //! keluar rekursif, kalau str nya 0
  if (str.length === 0) {
    return "";
  }

  //! kalau elemen paling kiri spasi, nggak dimasukin, rekursif kan element2 selanjutnya
  if (str[0] === " ") {
    return hapusSimbolRec(str.slice(1));
  }

  //! bikin var boolean, apakah a-z atau 0-9
  const isFirstWordNotSymbol = (str[0] >= "a" && str[0] <= "z") || (str[0] >= 0 && str[0] <= 9);

  //! kalau true, return element pertama, dilanjutkan rekursif lagi
  if (isFirstWordNotSymbol) {
    return str[0] + hapusSimbolRec(str.slice(1));
  }

  //! sisanya, abaikan element pertama, rekursifkan lagi element selanjutnya
  return hapusSimbolRec(str.slice(1));
}

console.log((" " >= "a" && " " <= "z") || (" " >= 0 && " " <= 9));

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100
