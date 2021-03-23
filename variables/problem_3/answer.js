{
  let foo = 'bar';
}

console.log(foo);

/* 
This program will throw a reference error that the variable foo is not 
defined. foo is encapsulated in a block therefore it has local scope 
to that block. If we wrote we tried logging foo inside of the curly braces
then the program would run.
*/