<<<<<<< HEAD
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

=======
// const findTheOldest = (arr) => arr.reduce((a, b) => {
//     if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
//       return a 
//     } else return b 
//   }, arr[0])

// ;

// const findTheOldest = (p) => p.reduce((acc, e) => {
//   const lived = x => x.yearOfDeath - x.yearOfBirth
//   return lived(e) > lived(acc) ? e : acc
// }, p[0])


const findTheOldest = function(array) { 
  return array.reduce((a, b) => {
    const oldest = getAge(a.yearOfBirth, a.yearOfDeath);
    const current = getAge(b.yearOfBirth, b.yearOfDeath);
    return oldest < current ? b : a
  })
};
>>>>>>> 352f6de9509d44946d8ff5479c1b6802db6abb76

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  } return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
