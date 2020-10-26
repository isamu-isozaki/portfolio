/**
 * Author: Isamu Isozaki
 */
const { findMailsByUser} = require('../repository');
const { findMailAddressById} = require('@/app/address/mailAddress/repository');

/**
 * 
 * @param {object} req request
 * @param {object} res response
 * Responds with an object with key mails which holds all the
 * mails of the user with their names(mail addresses)
 */
async function getMails(req, res) {
  const preprocessMails = await findMailsByUser(req.user._id);
  const mails = await Promise.all(preprocessMails.map(async preMail => {
    return {
      ...preMail, 
      from: (await findMailAddressById(preMail.fromId)).name,
      to: (await findMailAddressById(preMail.toId)).name,
    }
  }));
  res.success({ mails });
}

module.exports = { getMails };
