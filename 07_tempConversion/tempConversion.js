const ftoc = function(tempC) {
  let cels = (tempC - 32)*(5/9);
  let roundedC = Math.round(cels*10)/10; 
  return roundedC;
};

const ctof = function(tempF) {
  let celF = (tempF*(9/5))+32;
  let roundedF = Math.round(celF*10)/10;
  return roundedF;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
