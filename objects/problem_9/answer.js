let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/* 
Because we can mutate objects but not primitives, this logs 'hi' and 'hello'.
We could reassign qux to argument2, but we can't mutate it.
*/ 