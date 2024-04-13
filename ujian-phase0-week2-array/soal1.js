/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let oArr = "";
  let xArr = "";
  for (let i = 0; i < arr.length; i++) {
    //kalau oArr dan xArr udah ada isinya
    if (xArr !== "" && oArr !== "") {
      if (arr[i] === "o") {
        if (Math.abs(i - xArr) < Math.abs(oArr - xArr)) {
          oArr = i;
        }
      }
      if (arr[i] === "x") {
        if (Math.abs(i - oArr) < Math.abs(oArr - xArr)) {
          xArr = i;
        }
      }

      //kalau salah satu atau keduanya kosong
    } else {
      if (arr[i] === "x") {
        xArr = i;
      }
      if (arr[i] === "o") {
        oArr = i;
      }
    }
  }
  if (oArr !== "" && xArr !== "") {
    return Math.abs(oArr - xArr);
  } else {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
