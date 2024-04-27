/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  //! buat var konstanta sesuai soal
  const price = { Pesawat: 275000, Kereta: 250000, Bis: 225000 };
  const rute = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
  const discount = { OVO: 0.15, Dana: 0.1, Gopay: 0.05, Cash: 0 };

  //! buat var hasil
  let result = [];

  //! var penumpang = ["Danang-Yogyakarta-Semarang-Bis"], dst.
  let penumpang = [];
  for (let i = 0; i < arr.length; i++) {
    penumpang.push(arr[i]);
  }

  //! konstanta key object di dalam result
  const keyArray = ["name", "departureCity", "destinationCity", "transport"];

  //! var data sementara, untuk ngepush result saja, akhir2 loop dihapus
  let data = {};

  //! loop untuk menghasilkan result
  for (let i = 0; i < penumpang.length; i++) {
    //! var arrayPenumpang isinya array dari var string penumpang
    let arrayPenumpang = penumpang[i].split("-");
    for (let j = 0; j < keyArray.length; j++) {
      //! masukkan ke object data
      data[keyArray[j]] = arrayPenumpang[j];
    }

    //! buat var untuk ngitung jarak kota
    let departureIndex = 0;
    let destinationIndex = 0;
    for (let i = 0; i < rute.length; i++) {
      if (rute[i] === data.departureCity) {
        departureIndex = i;
      }
      if (rute[i] === data.destinationCity) {
        destinationIndex = i;
      }
    }

    //! object dengan key totalCost
    data.totalCost = price[data.transport] * Math.abs(destinationIndex - departureIndex) * (1 - discount[emoney]);
    //! push ke object data
    result.push(data);
    data = {};
  }

  //! lanjut, algoritma mengurutkan harga tertinggi
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i].totalCost < result[i + 1].totalCost) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return result;
}

console.log(travelingIndonesia(["Danang-Yogyakarta-Semarang-Bis", "Alif-Denpasar-Surabaya-Kereta", "Bahari-Semarang-Denpasar-Pesawat"], "OVO"));
/*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
console.log("==================================================================================================");
console.log(travelingIndonesia(["Shafur-Surabaya-Yogyakarta-Kereta", "Taufik-Semarang-Surabaya-Pesawat", "Alex-Yogyakarta-Semarang-Kereta"], "Dana"));
//*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"], "Gopay"));
//*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
//*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
