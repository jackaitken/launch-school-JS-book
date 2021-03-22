let num = 4936;

let ones = num % 10;
console.log(`Ones: ${ones}`);

num = (num - ones) / 10;

let tens = num % 10;
console.log(`Tens: ${tens}`);

num = (num - tens) / 10;

let hundreds = num % 10;
console.log(`Hundreds: ${hundreds}`);

num = (num - hundreds) / 10;
console.log(`Thousands: ${num}`);

// OR

const findDigit = (num) => {
  if (num < 10) {
    console.log(num);
    return num;
  } else {
    let currentPlace = num % 10;
    console.log(currentPlace);
    let newNum = (num - currentPlace) / 10;
    return findDigit(newNum);
  }
}

let num = 4936;
findDigit(num);

