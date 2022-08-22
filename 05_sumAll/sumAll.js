const sumAll = function(...values) {
  let sum = 0;
  for(let value of values) {
    if (typeof value !== 'number' || Math.min(...values) < 0 ) {
      return 'ERROR';
    }
  }  
  for(let i = Math.min(...values); i <= Math.max(...values); i++) {
    sum += i;   
  } return sum
}

// const sumAll = function(a, b) {
//   let sum = 0;
//   for(let i = a; i <= b; i++) {
//     sum += i;
//   } return sum
// }

// Do not edit below this line
module.exports = sumAll;
