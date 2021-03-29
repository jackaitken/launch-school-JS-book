let arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0;i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 5], [1, 2, 5]));
console.log(arraysEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysEqual([1, 2, 2], [1, 2, 3]));
