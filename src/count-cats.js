const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

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
}

module.exports = {
  countCats
};
