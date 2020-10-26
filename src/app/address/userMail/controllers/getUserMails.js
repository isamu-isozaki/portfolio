/**
 * Author: Isamu Isozaki
 */
const { findUserMailByUser } = require('../repository');
const { findMailAddressById} = require('@/app/address/mailAddress/repository');
const _keyBy = require("lodash/keyBy");

/**
 * 
 * @param {object} req request
 * @param {object} res response
 * Responds with an object with key userMails which holds all the
 * user mails of the user with their names(mail addresses) with structure {_id1: usermail with _id1 ...}
 */
async function getUserMails(req, res) {
  const userId = req.user._id;
  const preProcessedUserMails = await findUserMailByUser(userId);
  const userMails = await Promise.all(preProcessedUserMails.map(
    async mail => { 
      const mailAddress = await findMailAddressById(mail.mailAddressId);
      const privateMailAddress = await findMailAddressById(mail.privateMailAddressId);
      return {
        ...mail.toObject(), 
        mailAddress: mailAddress && mailAddress.name,
        privateMailAddress: privateMailAddress && privateMailAddress.name,
      }
    }
  ));
  //console.log(userMails[0]._id);
  res.success({ userMails: _keyBy(userMails, '_id') });
}

module.exports = { getUserMails };
