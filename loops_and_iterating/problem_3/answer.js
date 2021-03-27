let counter = 1;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* 
This causes an infinite loop becauses it reassigns the value of counter
in the while statement rather than using an equivalency operator '==='.
Thus counter will always be < 2 and will never break.
*/