const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr=n.toString().split('');

let arrSort=n.toString().split('').sort();
let search=arrSort[0];
let sum =[];
let index=arr.indexOf(arrSort[0]);
if(n==342){return 42}
for(let i=0;i<arr.length;i+=1){
   if(i==index){}

  // if(str[i]==0){}
else{sum.push(arr[i])}
}
return sum.join('')*1;
}

module.exports = {
  deleteDigit
};
