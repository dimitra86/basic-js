const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let bracket = '[';
        let bracket2 = ']';
        let j = 0;
        //let arr = [1, 2, 3, 4, 5, [1]];
        let str = JSON.stringify(arr);
        let max = 0;
        let currentmax = 0;
        let allbracket = 0;

        for (let i = 0; i < str.length; i++) {
            if (bracket == str[i]) {
                //max = max + 1;
                currentmax = currentmax + 1;
                //   allbracket++;

            }
            if (bracket2 == str[i]) {
                currentmax = currentmax - 1;
                //  console.log(currentmax);
            }
            if (currentmax > max) {
                max = currentmax;
                //  console.log(max);
            }

        }
        return max;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
