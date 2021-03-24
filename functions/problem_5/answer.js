function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');


/* 
Becuase we have made no call to the log this to the console, nothing
would be logged. If we wrapped our scream call in a console.log() method
Then it would log: 'Yipeee!!!!'. 
The function definition could also be shortened to a function 
expression to read:
*/

let scream = words => words + '!!!!';
