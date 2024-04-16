function moveZeros(arr) {
  newArr = arr.filter((i) => i !== 0);

  let count0 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(0);
    }
  }
  return newArr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
