let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* 
This will log [1, 4, 3]. Because the way JavaScript handle variables that 
reference an object. Both array1 and array2 point to the same array in 
memory so making a change to array1 will affect array2 and vice versa.
*/