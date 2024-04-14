/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates(students) {
  // Code disini
  let result = {}; //!declare result

  //!tampung semua kelas ke classes kalau kelas masih kosong / belum ada yg dobel
  let classes = [];
  for (let i = 0; i < students.length; i++) {
    if (classes.length === 0 || !classes.includes(students[i].class)) {
      classes.push(students[i].class);
    }
  }

  //!buat var untuk ngisi result
  let name;
  let score = 75;

  //!ngecek apakah tiap kelas ada yg lulus >75
  for (let i = 0; i < classes.length; i++) {
    result[classes[i]] = []; //!masukkan nama kelas ke result dengan value sementara []
    for (let j = 0; j < students.length; j++) {
      if (classes[i] === students[j].class && students[j].score > 75) {
        //!kalau ada yg lulus, masukkan ke name dan score
        name = students[j].name;
        score = students[j].score;
        //!push ke array kelas yg ada di dalam object result
        result[classes[i]].push({ name, score });
      }
    }
  }

  return result;
}

console.log(
  graduates([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes",
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves",
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes",
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
  graduates([
    {
      name: "Alexander",
      score: 100,
      class: "foxes",
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves",
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes",
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves",
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers",
    },
  ])
);

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
