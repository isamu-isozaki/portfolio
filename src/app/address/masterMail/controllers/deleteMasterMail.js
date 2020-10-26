/**
 * Author: Isamu Isozaki
 */
const { removeMasterMailById, findMasterMailById } = require("../repository");
const { removeMailAddressById } = require('@/app/address/mailAddress/repository');
const { removeIncomingMailByHostMail } = require('@/app/address/incomingMail/repository');
/**
 * 
 * @param {object} req request where req.params.masterMailId is the id of the master mail getting deleted
 * @param {object} res response
 * Deletes master mail and all mails linked to it except instruct mails and outgoing mails
 */
async function deleteMasterMail(req, res) {
  const masterMail = await findMasterMailById(req.params.masterMailId);
  await removeMailAddressById(masterMail.mailAddressId);
  await removeIncomingMailByHostMail(masterMail.mailAddressId);
  await removeMasterMailById(req.params.masterMailId);
  res.success({});
}

module.exports = { deleteMasterMail };
