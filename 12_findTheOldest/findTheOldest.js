// const findTheOldest = function(array) {
//   const oldest = array.sort(function(a,b) {
//     const lastP = a.yearOfDeath - a.yearOfBirth;
//     const newP = b.yearOfDeath - b.yearOfBirth;
//     return lastP > newP ? -1 : 1;
//     return array[0]
//   }) 
  
// };

const findTheOldest = function(array) {
  let oldest = array.reduce((prev, curr) => {
    return prev.yearOfDeath - prev.yearOfBirth < curr.yearOfDeath - curr.yearOfBirth
      ? curr : prev
  })
}


// Do not edit below this line
module.exports = findTheOldest;
