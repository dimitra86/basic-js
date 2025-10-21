const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let str='';
  for(let i=0;i<email.length;i++){
      if(email[i]=='@'){let id=i+1
          str=email.slice(id, email.length);
      }
  }
return str;
}

module.exports = {
  getEmailDomain
};
