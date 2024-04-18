/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
  if (array.length <= 0) {
    return "nothing";
  }
  let rightPos = array.length - 1;

  //! kalau tidak ada tanda 'x' di array :
  if (array.indexOf("x") === -1) {
    //! kalau element paling kanan gk habis dibagi num, tinggal hapus element, rekursif in lagi
    if (array[rightPos] % num !== 0) {
      array.pop();
      return dividableRecursive(array, num);
    } else {
      //! kalau ternyata habis dibagi num, kasih tanda 'x' di sebelah kiri recent elemennya, rekursif in
      array2 = array.slice(0, rightPos);
      array2.push("x", array[rightPos]);
      return dividableRecursive(array2, num);
    }
  }

  //! else, seharusnya ada tanda 'x' di array

  //! kalau tanda x nya di awal array, langsung return hasilnya
  if (array[0] === "x") {
    array2 = array.slice(1).join(" ");
    return array2;
  }

  //! bikin var utk mencari index nya tanda x
  let xPos = array.indexOf("x");

  //! kalau element sebelum 'x' habis dibagi num, tuker posisi element tsb dengan tanda x, rekursif lagi
  if (array[xPos - 1] % num === 0) {
    array[xPos] = array[xPos - 1];
    array[xPos - 1] = "x";
    return dividableRecursive(array2, num);
  }

  //! kalau element sebelum 'x' tidak habis dibagi num, hapus element nya, rekursif lagi
  array.splice(xPos - 1, 1);
  return dividableRecursive(array2, num);
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132
