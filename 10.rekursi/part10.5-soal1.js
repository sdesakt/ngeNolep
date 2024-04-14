/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  //!nemu cara sort integer cepet di google, belum terlalu paham juga
  arrNumber.sort((a, b) => a - b);
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  //!kalau kondisi argumen nya array kosong
  if (arrNumber.length === 0) {
    return "''";
  }

  //!karena udah disort, jadinya paling kanan harusnya num paling gede. nah itung aja dari kanan
  let count = 1;
  let biggestNum = arrNumber[arrNumber.length - 1];
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] === arrNumber[i - 1]) {
      count++;
    } else {
      return `angka paling besar adalah ${biggestNum} dan jumlah kemunculan sebanyak ${count} kali`;
    }
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
