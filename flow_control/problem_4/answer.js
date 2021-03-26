function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* 
this code would log:
Product2
Product3
Product not found!

It would not consider the first statement since the argument: 
'113' != '123', but it would enter the second case and then fall through
the rest as there are no break statements.
*/