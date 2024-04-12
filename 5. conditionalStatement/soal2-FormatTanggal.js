// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 29; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2024; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
let error = false;

if (tahun < 1900 || tahun > 2200) {
  console.log("Mohon isi tahun antara 1900-2200");
  error = true;
}

let displayBulan = "";
switch (bulan) {
  case 1:
    displayBulan = "Januari";
    break;
  case 2:
    displayBulan = "Februari";
    break;
  case 3:
    displayBulan = "Maret";
    break;
  case 4:
    displayBulan = "April";
    break;
  case 5:
    displayBulan = "Mei";
    break;
  case 6:
    displayBulan = "Juni";
    break;
  case 7:
    displayBulan = "Juli";
    break;
  case 8:
    displayBulan = "Agustus";
    break;
  case 9:
    displayBulan = "September";
    break;
  case 10:
    displayBulan = "Oktober";
    break;
  case 11:
    displayBulan = "November";
    break;
  case 12:
    displayBulan = "Desember";
    break;
  default:
    console.log("Mohon isi bulan antara 1-12");
}

if (bulan === 2) {
  if (tahun % 4 === 0) {
    if (tanggal < 1 || tanggal > 29) {
      console.log("Mohon isi tanggal antara 1-29");
      error = true;
    }
  } else {
    if (tanggal < 1 || tanggal > 28) {
      console.log("Mohon isi tanggal antara 1-28");
      error = true;
    }
  }
} else if (bulan === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
  if (tanggal < 1 || tanggal > 31) {
    console.log("Mohon isi tanggal antara 1-31");
    error = true;
  }
} else {
  if (tanggal < 1 || tanggal > 30) {
    console.log("Mohon isi tanggal antara 1-29");
    error = true;
  }
}

const displayDate = `${tanggal} ${displayBulan} ${tahun}`;

if (error) {
  console.log("tidak bisa menampilkan format tanggal salah");
} else {
  console.log(displayDate);
}
