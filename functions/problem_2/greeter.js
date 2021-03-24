let greeter = (askName) => {
  let rlSync = require('readline-sync');
  let name = rlSync.question(askName);
  return name;
}

let first = greeter('What is your first name?\n');
let last = greeter('What is your last name?\n' );

console.log(`Nice to meet you, ${first} ${last}!`);