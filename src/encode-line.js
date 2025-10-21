const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let number = 0;
  let count = 1;
  let newStr = '';

  if(str==''){return newStr}

  for (let i = 0; i < str.length + 1; i++) {
    // console.log(str[i] == str[i + 1])
    if (str[i] == str[i + 1]) {
      count++;
      // i++;
      if (number < count) {
        number = count;

      }


    }
    else {
      if (count == 1) { newStr = newStr + str[i] }
      if (count > 1) { newStr = newStr + (number + str[i]) }

      count = 1;
      number = 0;
    }


  }

  return newStr;
}

module.exports = {
  encodeLine
};
