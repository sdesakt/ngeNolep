function highestScore(students) {
  // Code disini
  //!buat array utk menampung semua jenis kelas
  let classes = [];

  for (let i = 0; i < students.length; i++) {
    //!kalau array kelas kosong, masukkan nama kelas
    if (classes.length === 0 || !classes.includes(students[i].class)) {
      classes.push(students[i].class);
    }
  }

  //!buat variable utk sementara menampung nama dan skor
  let name = "";
  let score = 0;
  //!buat object result
  let result = {};

  //!loop tiap array classes
  for (let i = 0; i < classes.length; i++) {
    //!loop students
    for (let j = 0; j < students.length; j++) {
      //!kalau nama kelas sama, dan skornya lebih besar dari score, masukkan ke name dan score
      //!loop sampai ada score terbesar
      if (classes[i] === students[j].class && students[j].score > score) {
        name = students[j].name;
        score = students[j].score;
      }
      //!masukkan ke object result
      result[classes[i]] = { name, score };
    }
    //!kosongkan name dan score biar nggak bug :"""((((
    name = "";
    score = 0;
  }

  return result;
}

// TEST CASE
console.log(
  highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
