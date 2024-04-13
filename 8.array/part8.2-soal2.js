let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  // new input array
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);

  // cetak bulan lahir
  let tanggalLahirArray = input[3].split("/");
  let bulanLahir = parseInt(tanggalLahirArray[1]);

  let displayBulanLahir = "";
  switch (bulanLahir) {
    case 1:
      displayBulanLahir = "Januari";
      break;
    case 2:
      displayBulanLahir = "Februari";
      break;
    case 3:
      displayBulanLahir = "Maret";
      break;
    case 4:
      displayBulanLahir = "April";
      break;
    case 5:
      displayBulanLahir = "Mei";
      break;
    case 6:
      displayBulanLahir = "Juni";
      break;
    case 7:
      displayBulanLahir = "Juli";
      break;
    case 8:
      displayBulanLahir = "Agustus";
      break;
    case 9:
      displayBulanLahir = "September";
      break;
    case 10:
      displayBulanLahir = "Oktober";
      break;
    case 11:
      displayBulanLahir = "November";
      break;
    case 12:
      displayBulanLahir = "Desember";
      break;
  }
  console.log(displayBulanLahir);

  // array tanggal lahir baru
  yearBirth = tanggalLahirArray.pop();
  tanggalLahirArray2 = tanggalLahirArray.slice(0, 2);
  tanggalLahirArray2.unshift(yearBirth);
  console.log(tanggalLahirArray2);

  // cetak string format tanggal lahir
  let tanggalLahir = input[3].split("/");
  console.log(`${tanggalLahir[0]}-${tanggalLahir[1]}-${tanggalLahir[2]}`);

  // cetak nama dengan max 15 karakter
  let nama15 = input[1].substring(0, 15);
  console.log(nama15);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
