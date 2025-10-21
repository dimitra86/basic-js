const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shift = alphabet.indexOf(key[i % key.length].toLowerCase());
        const encryptedCharCode = (charCode - 65 + (this.direct ? shift : -shift)) % 26 + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
      } else if (charCode >= 97 && charCode <= 122) {
        const shift = alphabet.indexOf(key[i % key.length].toLowerCase());
        const encryptedCharCode = (charCode - 97 + (this.direct ? shift : -shift)) % 26 + 97;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
      } else {
        encryptedMessage += message[i];
      }
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    return this.encrypt(encryptedMessage, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
