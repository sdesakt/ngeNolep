function highestScore(students) {
  // Code disini
  //!buat result object
  let object = {};

  //!loop students
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    //!kalau object kelas masih undefined, bikin dulu lah
    if (!object[student.class]) {
      object[student.class] = { name: "", score: 0 };
    }
    //!harusnya object kelas udah ada, cek kalau skor student lebih gede dari skor di object kelas, replace aja
    if (student.score > object[student.class].score) {
      object[student.class].name = student.name;
      object[student.class].score = student.score;
    }
  }
  //?JOOSS SUHU, TERIMA KASIH BANYAK ILMU NYA!!
  return object;
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
