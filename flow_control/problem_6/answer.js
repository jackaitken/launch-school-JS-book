function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/* 
This would output 'Not Empty'. The empty array, which has been passed as an
argument, although empty still has a truthy value.
*/