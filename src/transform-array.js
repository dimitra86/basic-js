const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error("Error");
  if (arr.length === 0) return [];
  let result = [];
  let arrSequences = [
    "--discard-prev",
    "--discard-next",
    "--double-prev",
    "--double-next",
  ];
  result = arr.filter((value) => arrSequences.includes(value));
  if (result.length === 0) {
    return arr;
  } else {
    result = [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arrSequences.includes(arr[i])) {
      switch (arr[i]) {
        case "--discard-next":
          if (i == arr.length - 1) break;
          i++
          break;
        case "--discard-prev":
          if (i === 0) break;
          if (arr[i - 2] !== "--discard-next") {
            result.pop()
          }
          break;
        case "--double-next":
          if (i === arr.length - 1) break;
          result.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (i === 0) break;
          if (arr[i - 2] !== "--discard-next") {
            result.push(arr[i - 1]);
          }
          break;
        default:
          result.push(arr[i]);
          break;
      }}
    else {
      result.push(arr[i]) 
    }  
  }
  return result;
}

module.exports = {
  transform
};
