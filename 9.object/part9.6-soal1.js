function changeMe(arr) {
  // you can only write your code here!
  //!buat bahan variabel dulu
  for (let i = 0; i < arr.length; i++) {
    let name = `${arr[i][0]} ${arr[i][1]}`;
    let firstName = arr[i][0];
    let lastName = arr[i][1];
    let gender = arr[i][2];
    //!cek apakah age ada atau tidak
    let age = arr[i][3] ? 2024 - arr[i][3] : "Invalid date birth";
    //!buat menjadi objek
    let obj = { firstName: firstName, lastName: lastName, gender: gender, age: age };
    console.log(`${name}: `);
    console.log(obj);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);

// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
