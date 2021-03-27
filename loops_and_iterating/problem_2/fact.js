let fact = num => {
  let curNum = 1;
  for (let i = 1; i <= num; i++) {
    curNum *= i;
  }
  return curNum;
}
