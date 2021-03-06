const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //let a="^^";
  
const arr = matrix.reduce((prev, item) => {
return prev.concat(item);
}, []);
//return flat;
let cats=0;
for(i=0;i<arr.length;i++){
  if(arr[i]=="^^"){
    cats=cats+1;
  }
}
return cats;
};
