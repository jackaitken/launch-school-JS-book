let numberPrompt = (prompt) => {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let multiply = (leftOperand, rightOperand) => leftOperand * rightOperand;

let leftOperand = numberPrompt('Enter the first number: ');
let rightOperand = numberPrompt('Enter the second number: ');

let product = multiply(leftOperand, rightOperand);

console.log(`${leftOperand} * ${rightOperand} = ${product}`);