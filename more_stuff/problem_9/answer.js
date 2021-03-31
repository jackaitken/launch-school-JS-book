let signedZeros = num => {
  return 1 / num === -Infinity;
}

console.log(signedZeros(0));
console.log(signedZeros(-0));
console.log(signedZeros(110));
