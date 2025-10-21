const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const heights = arr.filter(height => height !== -1).sort((a, b) => a - b);
  const result = [];
  let heightIndex = 0;

  for (const height of arr) {
    if (height === -1) {
      result.push(height);
    } else {
      result.push(heights[heightIndex]);
      heightIndex++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
