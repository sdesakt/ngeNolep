/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let animalsA = [];
  let animalsC = [];
  let animalsK = [];
  let animalsU = [];

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal[0] === "a") {
      animalsA.push(animals[i]);
    }
    if (animal[0] === "c") {
      animalsC.push(animals[i]);
    }
    if (animal[0] === "k") {
      animalsK.push(animals[i]);
    }
    if (animal[0] === "u") {
      animalsU.push(animals[i]);
    }
  }
  groupAnimalsArray = [];
  groupAnimalsArray.push(animalsA, animalsC, animalsK, animalsU);
  return groupAnimalsArray;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
