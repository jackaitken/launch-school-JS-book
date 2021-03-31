let x = '5';
x = x + 1; // '51'

let y = '5';
y++; // 5

/* 
The return value is 5. Applying the ++ operator to a string coerces
the string to a number. It returns 5 instead of 6 because the ++
is after y. ++y would return 6.
*/