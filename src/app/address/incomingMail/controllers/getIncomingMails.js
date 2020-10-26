/**
 * Author: Isamu Isozaki
 */
const { findIncomingMailByUser } = require('../repository');
const {findMailAddressById} = require('@/app/address/mailAddress/repository');
const _keyBy = require("lodash/keyBy");
/**
 * 
 * @param {object} req request
 * @param {object} res response
 * Responds with an object with key incomingMails which holds all the
 * incoming mails of the user with their names(mail addresses) with structure {_id1: incomingmail with _id1 ...}
 */
async function getIncomingMails(req, res) {
  const userId = req.user._id;
  const preProcessedIncomingMails = await findIncomingMailByUser(userId);
  const incomingMails = await Promise.all(preProcessedIncomingMails.map(
    async mail => {
      const mailAddress = await findMailAddressById(mail.mailAddressId);
      const hostMailAddress = await findMailAddressById(mail.hostMailAddressId);
      const convertMailAddress = await findMailAddressById(mail.convertMailAddressId);
      return {
        ...mail.toObject(), 
        mailAddress: mailAddress && mailAddress.name,
        hostMailAddress: hostMailAddress && hostMailAddress.name,
        convertMailAddress: convertMailAddress && convertMailAddress.name,
      }
    }
  ));
  res.success({ incomingMails: _keyBy(incomingMails, '_id') });
}

module.exports = { getIncomingMails };
