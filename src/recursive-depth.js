const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // throw new CustomError('Not implemented');
        // remove line with error and write your code here

        // return Array.isArray(arr) ?
        //     1 + Math.max(...arr.map(this.calculateDepth)) :
        //     0;
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

};