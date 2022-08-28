

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
