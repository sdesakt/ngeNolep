//5. Bintang asteriks
//Problem buatlah bintang seperti berikut
//let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let asterix = "";
let input = 5;
for (let i = 1; i <= input; i++) {
  for (let j = i; j <= i; j++) {
    asterix += "*";
  }
  console.log(asterix);
}
