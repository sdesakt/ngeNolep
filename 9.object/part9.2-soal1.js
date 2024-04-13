//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!
  const primaUnder10 = [2, 3, 5, 7];

  for (let i = 0; i < primaUnder10.length; i++) {
    if (angka === primaUnder10[i]) {
      return true;
    }
  }
  if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }
  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
