function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}


console.log(doSomething('i ii iii iiii iiiii'));
/* 
This function will:
1. split a string by its spaces and return an array
2. reverse that array
3. return a new array that lists the length of each element in the array
*/