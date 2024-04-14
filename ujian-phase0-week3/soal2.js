/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  //!var untuk object
  let penumpang;
  let naikDari;
  let tujuan;
  let bayar;

  //!var untuk menghitung bayar
  const harga = 2000;
  let naikNum;
  let tujuanNum;

  //!membuat object dan result
  let object = {};
  let result = [];

  //!loop arrPenumpang
  for (let i = 0; i < arrPenumpang.length; i++) {
    penumpang = arrPenumpang[i][0];
    naikDari = arrPenumpang[i][1];
    tujuan = arrPenumpang[i][2];
    //!hitung bayar
    for (let i = 0; i < rute.length; i++) {
      if (rute[i] === naikDari) {
        naikNum = i;
      }
      if (rute[i] == tujuan) {
        tujuanNum = i;
      }
      bayar = (tujuanNum - naikNum) * harga;
    }

    //!masukkan var2 tsb ke object
    object = { penumpang, naikDari, tujuan, bayar };
    //!masukkan object ke result
    result.push(object);
  }
  return result;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
