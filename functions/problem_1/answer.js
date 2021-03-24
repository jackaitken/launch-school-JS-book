let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 
This code will log 1 to the console. foo has a local scope so the new variable
declaration on line 3 does not impact the global bar that was declared on line 1
If instead we included a console.log() within the foo function underneath 
let bar = 2; we could see that bar would display 2, but that still 
would not change the value of bar. 
*/