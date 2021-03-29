let oddLengths = arr => {
  return arr.reduce((acc, elem) => {
    if (elem.length % 2 !== 0) {
      acc.push(elem.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));