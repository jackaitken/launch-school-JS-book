let myObj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let objKeys = Object.keys(myObj);

objKeys.forEach(key => console.log(key));

for (let key in myObj) {
  console.log(key);
}