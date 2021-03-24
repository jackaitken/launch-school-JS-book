let rlSync = require('readline-sync');
let first = rlSync.question('What is your first name? ');
let last = rlSync.question('What is your last name? ');
console.log(`Hello, ${first} ${last}!`);