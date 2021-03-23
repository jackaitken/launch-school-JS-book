let foo = 'bar';

{
  let foo = 'qux';
}

console.log(foo);

/* 
This will log 'bar'. foo at line 1 has global scope as it was declared 
outside of the curly braces. Although within the curly braces we still 
have a new level of scope which allows us to create a new let declaration 
for foo the rest of the program is not aware of that declaration.
*/