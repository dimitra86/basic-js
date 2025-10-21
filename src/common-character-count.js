const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let arr1=[], arr2=[];
let sum=0;
let sum1=0;
let s1Sort=Array.from(new Set(s1.split(''))).join('');
let count = 0;
  for(let j=0;j<s1Sort.length;j++){
    for(let i=0;i<s1.length;i++){
      if(s1Sort[j]==s1[i]){sum++;}
      // arr1.push(sum);
    }
    
    arr1.push(sum);
    sum=0;
        }
    
    
        for(let j=0;j<s1Sort.length;j++){
          for(let i=0;i<s2.length;i++){
            if(s1Sort[j]==s2[i]){sum1++;}
            // arr1.push(sum);
          }
          
          arr2.push(sum1);
          sum1=0;
              }   
    
    // console.log (sum)
    // console.log(arr1)
    // console.log (sum1)
    // console.log(arr2)
    
    for(let k=0;k<arr1.length;k++){
      if(arr1[k]<=arr2[k]){count+=arr1[k]}
      else{count+=arr2[k]}
    }
    // if(arr1[0]<=arr2[0]){count+=arr1[0]}
    
   return(count);
}

module.exports = {
  getCommonCharacterCount
};
