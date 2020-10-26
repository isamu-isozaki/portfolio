/**
 * Author: Isamu Isozaki
 */
const { findMasterMailByUser } = require('../repository');
const {findMailAddressById} = require('@/app/address/mailAddress/repository');
const _keyBy = require("lodash/keyBy");
/**
 * 
 * @param {object} req request
 * @param {object} res response
 * Responds with an object with key masterMails which holds all the
 * master mails of the user with their names(mail addresses) with structure {_id1: mastermail with _id1 ...}
 */
async function getMasterMails(req, res) {
  const userId = req.user._id;
  const preProcessedMasterMails = await findMasterMailByUser(userId);
  const masterMails = await Promise.all(preProcessedMasterMails.map(
    async mail => {
      const mailAddress = await findMailAddressById(mail.mailAddressId);
      return {
        ...mail.toObject(), 
        mailAddress: mailAddress && mailAddress.name,
        outgoing: await Promise.all(mail.outgoingIds.map(
          async id => {
            const mail = await findMailAddressById(id);
            return mail && mail.name;
          })
        ),
        instructMails: await Promise.all(mail.instructMailIds.map(
          async id => {
            const mail = await findMailAddressById(id);
            return mail && mail.name;
          })
        ),
        textHeader: mail.textHeader,
      }
    }
  ));
  res.success({ masterMails: _keyBy(masterMails, '_id')});
}

module.exports = { getMasterMails };
