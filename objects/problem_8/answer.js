let obj = {
  name: 'Jack',
  age: 28,
  hometown: 'Dennis, MA',
};

let copyObj = (obj, keys) => {
  let newObj = {};

  if (keys) {
    keys.forEach(key => {
      newObj[key] = obj[key];
    });

  return newObj;
  } else {
    return Object.assign(newObj, obj);
  }
}

console.log(copyObj(obj, ['name']));