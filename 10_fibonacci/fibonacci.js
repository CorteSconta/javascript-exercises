const fibonacci = function(num) {
  let a = 0;
  let b = 1;
  //let c = parseInt(num);
  if ( num > 0) {
    for(let i = 1; i < num; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    } return b
  } else return 'OOPS'
};

// Do not edit below this line
module.exports = fibonacci;
