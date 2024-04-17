/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //! convert data to array
  data = data.split("");

  //! loop data array
  for (let i = 0; i < data.length; i++) {
    //! if odd :
    if (jenis === "ganjil") {
      //! if right element is odd or x, return data that convert to string
      if (data[data.length - 1] % 2 !== 0 || data[data.length - 1] === "x") {
        return data.join("");
      }

      //! if element i is odd or x, true, just continue
      if (data[i] % 2 !== 0 || data[i] === "x") {
        continue;
      }

      //! else, element must be even, change the element to x, convert data to string, and return func recursive again
      data[i] = "x";
      data = data.join("");
      return changeXRecursive(data, jenis);
    }

    //! same algorithm with odd algorithm above
    if (data[data.length - 1] % 2 === 0 || data[data.length - 1] === "x") {
      return data.join("");
    }

    if (data[i] % 2 === 0 || data[i] === "x") {
      continue;
    }
    data[i] = "x";
    data = data.join("");
    return changeXRecursive(data, jenis);
  }
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
