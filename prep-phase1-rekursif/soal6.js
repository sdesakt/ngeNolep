/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  //! bikin fungsi untuk rekursif
  const theRecursive = (sentence) => {
    //! kalau sentence kosong, stop rekursif
    if (sentence.length === 0) {
      return "";
    }
    //! return element paling kanan, lanjut rekursifkan lagi (element akhir ke awal, gitu terus)
    return sentence[sentence.length - 1] + sentence.slice(1);
  };

  //! samakan hasil rekursif dengan argumen awal
  return sentence === theRecursive(sentence);

  //lalu bandingkan dengan sentence
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
