function hapusSimbol(str) {
  // you can only write your code here!
  //!replace selain yg ada di [] menjadi kosong, global regex
  let result = str.replace(/[^a-zA-Z0-9]/g, "");
  return result;
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coding")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
