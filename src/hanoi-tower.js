const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    //  let numTransfers = 2**disksNumber - 1; 
    //  let timeTransfers=Math.floor(numTransfers * 3600 / turnsSpeed);
    //  let answer = {     // объект
    //    turns: numTransfers,  
    //    seconds: timeTransfers        
    //  }
    //  return answer;

    //variant two
    const turnsPerSecond = turnsSpeed / 3600;
    const turns = (2 ** disksNumber) - 1;
    const seconds = Math.floor(turns / turnsPerSecond);

    return {
        turns,
        seconds
    };
};