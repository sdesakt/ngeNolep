let paragraph = `
far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics,
a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!`;

console.log(paragraph.match(/far/g)); // ["far", "far", "far", "far"] ada 4 far

let str = "belajar regex itu menyenangkan";
console.log(str.split(/\s/));
// mengembalikan nilai "belajar, regex, itu, menyenangkan" karena \s adalah sebuah pattern untuk satu spasi.

let message = "Regex seru DEH!";
console.log(message.match(/e/));
// menampilkan "e", namun hanya sekali

console.log(message.match(/e/g));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `g` menandakan pencarian secara global, tidak hanya satu kali

console.log(message.match(/e/gi));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks. `i` menandakan pencarian karakter dengan ignore case, atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.
//mending kalian coba sendiri deh liat outputnya wkwk

let string = "Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#";
console.log(string.match(/[a-z]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]
