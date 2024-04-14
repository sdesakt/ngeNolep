//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  //!jadikan array
  let array = kalimat.split("");

  //!cek apakah lebih kecil dari lowercasenya, atau lebih besar dari uppercasenya
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i].toLowerCase()) {
      array[i] = array[i].toLowerCase();
    } else if (array[i] > array[i].toUpperCase()) {
      array[i] = array[i].toUpperCase();
    }
  }

  //!jadikan string lagi
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
