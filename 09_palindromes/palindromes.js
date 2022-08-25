const palindromes = function (word) { 
  let reverse = word.split('').reverse().join('');
  word = word.replace(/\W/g, '').toLowerCase();
  reverse = reverse.replace(/\W/g, '').toLowerCase();
  if (word === reverse) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
