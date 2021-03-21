const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here


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