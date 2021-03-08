const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
 if (Array.isArray(members)) {
   let name=[];
   for(let item of members){
     if (typeof item==="string"){
       const arrItem=item.trim().split('');
       name.push(arrItem[0].toUpperCase())
     }
   }
   return name.sort().join('')
 } else {
   return false
 }
}
