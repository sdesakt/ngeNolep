// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let angka = 1;
while (angka <= 100) {
  if (angka % 2 === 0) {
    console.log(`${angka} = GENAP`);
  } else {
    console.log(`${angka} = GANJIL`);
  }
  angka++;
}
