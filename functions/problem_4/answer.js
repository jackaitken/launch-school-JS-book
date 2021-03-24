function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* 
The above code will log nothing because the return statement precedes the
console.log();. Switching the return statement and console.log();
would result in a log of 'Yipeee!!!!'
*/