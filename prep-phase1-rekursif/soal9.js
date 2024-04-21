/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
  //code here
  //! lowercase kan viruses
  if (viruses !== undefined && viruses.length > 0) {
    viruses = viruses.toLowerCase();
  }

  //! lowercase kan str
  if (str !== undefined && str.length > 0) {
    str = str.toLowerCase();
  }

  //! kalau viruses kosong, return :
  if (viruses === undefined) {
    return "There is no virus";
  }

  //! convert viruses ke array dengan ngilangin |
  let virusArray = viruses.split("|");

  //! loop virusArray
  for (let i = 0; i < virusArray.length; i++) {
    //! kalau length nya dah 1, kalau element kiri virus, return 1, kalau bukan, return 0
    if (str.length === 1) {
      if (virusArray[i] === str[0]) {
        return 1;
      }
      return 0;
    }

    //! else, kalau length nya masih di atas 1, kalau element kiri virus, jadikan angka 1, tambahkan dengan fungsi rekursif lagi
    if (virusArray[i] === str[0]) {
      return 1 + virusCheckRecursive(str.slice(1), viruses);
    }
  }

  //! kalau bukan virus, rekursifkan lagi
  return virusCheckRecursive(str.slice(1), viruses);
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus
