const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let num=Number(sampleActivity);
  //console.log(numbers);
  if((typeof(sampleActivity)!=="string")|(num<=0)|(num>=15)|(Boolean(num)==false)){
    return false;
  }
//console.log(Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD)));
else  return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD));
};
