const removeFromArray = function(arr, ...values) {
  for (let value of values) {
    let array = arr.indexOf(value);
    if (array !== -1) {
      arr.splice(array, 1);
    } 
  } return arr
};

// Do not edit below this line
module.exports = removeFromArray;
