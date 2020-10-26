/**
 * Author: Isamu Isozaki
 */
const { removeIncomingMailById } = require("../repository");
/**
 * 
 * @param {object} req request where the string mail id to be deleted is in req.params
 * @param {object} res response
 * Delete the incoming mail with id req.params.incomingMailId
 */
async function deleteIncomingMail(req, res) {
  await removeIncomingMailById(req.params.incomingMailId);
  res.success({});
}

module.exports = { deleteIncomingMail };
