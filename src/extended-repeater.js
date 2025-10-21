const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {

  let result = String(str);
  let str2 = '';
  if (options.addition !== undefined) {
      result += options.addition;
  }
  if (options.additionRepeatTimes > 1) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
          result += (options.additionSeparator || "|") + options.addition;
      }
  }
  if (options.repeatTimes > 1) {
      for (let i = 1; i < options.repeatTimes; i++) {
          str2 += result + (options.separator || "+");
      }
      str2 += result;
  } else {
      str2 = result;
  }
  return str2;
}

module.exports = {
  repeater
};
