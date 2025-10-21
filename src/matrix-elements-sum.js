const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  function getColumn(matrix, colIndex) {
    return matrix.map(row => row[colIndex]);
  }
  // console.log(getColumn(matrix, 0).length)

  const numberCols = getColumn(matrix, 0).length;
  // console.log(numberCols)

  const maxCols = matrix[0].length;
  // console.log('maxCols:' + `${maxCols}`)
  let newArr = []

  for (let i = 0; i < maxCols; i++) {
    newArr.push(getColumn(matrix, i))
    // console.log(getColumn(matrix,i))
  }

  // console.log(newArr)

  const array = newArr.map(row => row).flat();
  // console.log(array)
  let sum = 0;
  // console.log('array:' + `${array}`)

  array.forEach((number, index) => {
    sum += number;
    // console.log(index % numberCols !== 0)
    if (index % numberCols !== 0)
   { 
      // console.log(number == 0)
      if (number == 0) {
        if ((index+1) % numberCols == 0){}
        else {sum -= array[index + 1] }
// console.log(array[index + 1] )
      }
      
      // console.log('array:' + `${array}`)
    }
    // console.log(index+':'+number)
    // if (index % numberCols == 0) {

    // }
    // else {
     
    // }

  });
  return sum
}

module.exports = {
  getMatrixElementsSum
};
