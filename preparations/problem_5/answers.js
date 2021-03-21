/* 1. substring: Is a prototype method of the String constructor. 
For example: */

'hello'.substring(1, 3); // 'ell'

/* 2. create: Is a static method of the Object constructor. For example: */
const dog = {
  species: 'Canis lupus',
  kingdom: 'Animalia'
}

let Arlo = Object.create(dog);

/* 3. fromCharCode: Is a static method of the String constructor. It can be
used without a string literal or string instance. For example: */

String.fromCharCode(65); // 'A'

/* 4. slice: Is a prototype method belonging to the, Array and String constructor.
For example with an Array: */

let arr = ['apple', 'banana', 'pear', 'pineapple'];
arr.slice(1, 3); // ['banana', 'pear']

/* 5. toString(): Is a prototype method belonging to the, Number, Object,
Array, and String constructors. For example with a Number: */

let num = 100;
num.toString(); // '100'