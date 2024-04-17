/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //! lowercase all
  sentences = sentences.toLowerCase();

  //! make new var
  let newSentences = "";

  for (let i = 0; i < sentences.length; i++) {
    //! if element is alphabet or before 'a' or after 'z' in char number (i dont know the name)
    if (sentences[i] < "a" || sentences[i] > "z" || sentences[i] === "a" || sentences[i] === "i" || sentences[i] === "u" || sentences[i] === "e" || sentences[i] === "o") {
      //! if recent element is the last element and not a consonant, return newSentences.length
      if (i === sentences.length - 1) {
        return newSentences.length;
      }

      //! if recent element isn't the last element and not a consonant, slice the element after recent element,
      //! and return recursive func again
      newSentences += sentences.slice(i + 1);
      return consonantCounterRecursive(newSentences);
    }

    //! if recent element is a consonant (else), and the last element, add to newSentence first,
    //! then return newSentences.length
    if (i === sentences.length - 1) {
      newSentences += sentences[i];
      return newSentences.length;
    }

    //! if recent element is a consonant (else) and not the last element, add to newSentences, then continue loop
    newSentences += sentences[i];
  }
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
