let search = (array, regex) => {
  let matchArr = [];
  array.forEach(element => {
    if (regex.test(element)) {
      matchArr.push(element);
    }
  });
  return matchArr;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(search(words, /lab/));