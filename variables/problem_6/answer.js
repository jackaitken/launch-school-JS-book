const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* 
This will not throw an error precisely because of the reason described in 
problem 5. The curly braces create a new level of scope which allow another
const declaration. Logging foo after line 3 within the curly braces would 
output 'qux'.
*/