//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
  let faktor = 0;
  if (angka1 < angka2) {
    faktor = angka1;
  } else {
    faktor = angka2;
  }

  while (faktor > 0) {
    if (angka1 % faktor === 0 && angka2 % faktor === 0) {
      return faktor;
    }
    faktor--;
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
