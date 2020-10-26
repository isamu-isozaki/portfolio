/**
 * Author: Isamu Isozaki
 */
const { removeUserMailById, findUserMailById } = require("../repository");
const { removeMailAddressById } = require('@/app/address/mailAddress/repository');
const { removeIncomingMailByHostMail } = require('@/app/address/incomingMail/repository');

/**
 * 
 * @param {object} req request where req.params.userMailId is the id of the user mail getting deleted
 * @param {object} res response
 * Deletes user mail and all mails linked to it except privateMailAddress
 */
async function deleteUserMail(req, res) {
  const userMail = await findUserMailById(req.params.userMailId);
  await removeMailAddressById(userMail.mailAddressId);
  await removeIncomingMailByHostMail(userMail.mailAddressId);
  await removeUserMailById(req.params.userMailId);
  res.success({});
}

module.exports = { deleteUserMail };
