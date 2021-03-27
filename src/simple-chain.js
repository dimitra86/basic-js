const CustomError = require("../extensions/custom-error");

const chainMaker = {
    currChain: [],
    getLength() {
        //throw new CustomError('Not implemented');
        // remove line with error and write your code here
        return this.currChain.length;
    },
    addLink(value) {
        // throw new CustomError('Not implemented');
        // remove line with error and write your code here
        this.currChain.push(`( ${value} )`);
        return this;

    },
    removeLink(position) {
        //throw new CustomError('Not implemented');
        // remove line with error and write your code here
        if (this._checkIntegerNumber(position)) {
            if (position < 1 || position > this.getLength()) {
                this._deleteChain();
                throw new Error('Removing link position is out of range!');
            }
            const index = position - 1;
            this.currChain.splice(index, 1);
            return this;
        }
        this._deleteChain();
        throw new Error('Position must be integer number!');
    },
    reverseChain() {
        //throw new CustomError('Not implemented');
        // remove line with error and write your code here
        this.currChain.reverse();
        return this;
    },
    finishChain() {
        //throw new CustomError('Not implemented');
        // remove line with error and write your code here
        const chain = this._getChain();
        this._deleteChain();
        return chain;
    },
    _deleteChain() {
        this.currChain.length = 0;
    },
    _checkIntegerNumber(num) {
        return typeof num === 'number' && (num ^ 0) === num;
    },
    _getChain() {
        return this.currChain.join('~~');
    }



};
console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()) //'( 3rd )~~( function() {} )'

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())

module.exports = chainMaker;