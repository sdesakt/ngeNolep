/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  //!biasa, cek kalau parameter kosongan
  if (str.length === 0) {
    return [];
  }

  //!jadiin array dulu
  arrayDota = str.split(",");

  //!buat var hasil, ranged, melee
  let result = [];
  let ranged = [];
  let melee = [];

  //!loop, hasil array nya dibikin lagi array sementara, trus sandingkan dengan index kedua (ranged/melee)
  for (let i = 0; i < arrayDota.length; i++) {
    let hero = arrayDota[i];
    if (hero.split("-")[1] === "Ranged") {
      ranged.push(hero.split("-")[0]); //!lgsg push aja ke var ranged/melee
    } else melee.push(hero.split("-")[0]);
  }
  //!push ke result
  result.push(ranged);
  result.push(melee);

  return result;
}

// TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
