let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

/*
array1.length returns 4
array2.length returns 5
array3.length returns 0
array4.length returns 3
array5.length returns 101
*/
