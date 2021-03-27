for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/* 
This will output 1, 2, 3, 4, 5. It will still increment i on line 2, and it
will break once it is greater than 5.
*/