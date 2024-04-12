// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// ?algoritma
// Welcome to Proxytia!!!
// terdapat nama dan peran di game ini
// cek nama user
// Jika nama kosong, muncul peringatan untuk wajib mengisi nama dulu
// user input nama
// cetak : halo, nama user!
// lanjut cek peran
// jika peran kosong, diberi 3 pilihan peran : Ksatria, Tabib, Penyihir
// user input peran
// jika peran terisi Ksatria, cetak : halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// jika peran terisi Tabib, cetak : halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// jika peran terisi Penyihir, cetak : halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// jika peran terisi selain 3 pilihan yang disediakan, cetak : kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// game lanjut dimainkan
//!isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "",
  peran = "";

//code disini gunakan console.log untuk outputnya
console.log("Welcome to Proxytia!!!");

if (nama === "") {
  console.log("nama wajib diisi!");

  nama = "sdesakt"; //anggap user memilih nama ini
  console.log(`Halo, ${nama}`);
}

if (peran === "") {
  console.log("Pilih Peranmu untuk memulai game!");
  console.log("1. Ksatria");
  console.log("2. Tabib");
  console.log("3. Penyihir");

  peran = "Penyihirzzz"; //anggap user memilih peran ini
}

if (peran === "Ksatria") {
  console.log(`${nama} memilih ${peran}!`);
  console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === "Tabib") {
  console.log(`${nama} memilih ${peran}!`);
  console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran === "Penyihir") {
  console.log(`${nama} memilih ${peran}!`);
  console.log(`halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log(`${nama} tidak memilih salah satu dari ketiga peran`);
  console.log("kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
}
