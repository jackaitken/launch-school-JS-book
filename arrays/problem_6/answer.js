let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let arrLengths = array => {
  let newArr = arr.filter(num => num.length % 2 !== 0);
  return newArrLengths = newArr.map(num => num.length);
}

console.log(arrLengths(arr));