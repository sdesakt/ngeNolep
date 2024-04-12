//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

console.log("~COUNTER 2~");

let a = 1;
while (a <= 100) {
  if (a % 3 === 0) {
    console.log(`${a} kelipatan 3`);
  } else {
    console.log(a);
  }
  a += 2;
}

console.log("~COUNTER 5~");

let b = 1;
while (b <= 100) {
  if (b % 6 === 0) {
    console.log(`${b} kelipatan 6`);
  } else {
    console.log(b);
  }
  b += 5;
}

console.log("~COUNTER 9~");

let c = 1;
while (c <= 100) {
  if (c % 10 === 0) {
    console.log(`${c} kelipatan 10`);
  } else {
    console.log(c);
  }
  c += 9;
}
