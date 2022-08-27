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

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  } return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
