let evenOrOdd = num => {
  if (typeof num === 'number') {
    num % 2 == 0 ? console.log('even') : console.log('odd');
  } else {
    throw 'Input must be of Number type';
  }
}
