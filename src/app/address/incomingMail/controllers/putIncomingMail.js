/**
 * Author: Isamu Isozaki
 */
const { findIncomingMailById, updateIncomingMail } = require("../repository");
const {findOrMakeMailAddressByName, findMailAddressByName} = require('@/app/address/mailAddress/repository');
/**
 * 
 * @param {object} req string mailAddress or hostMailAddress or convertMailAddress in email from in req.body.data
 * @param {object} res response
 * For non-null parameter of mailAddress, hostMailAddress, and convertMailAddress update the mail address by 
 * Creating or finding with findOrMakeMailAddressByName and update incomingMail.
 * Respond with updated incomingMail
 */
async function putIncomingMail(req, res) {
  const { mailAddress, hostMailAddress, convertMailAddress,} = req.body.data;
  const address = mailAddress && (
    await findOrMakeMailAddressByName(req.user._id, mailAddress)
  )._id;
  const hostAddress = hostMailAddress && (
    await findMailAddressByName(hostMailAddress)
  )._id;
  const convertAddress = convertMailAddress && (
    await findOrMakeMailAddressByName(req.user._id, convertMailAddress, {isRcpt: true})
  )._id;
  const incomingMail = await findIncomingMailById(req.params.incomingMailId);
  if(!incomingMail) {
    return res.badRequest("can't change invalid incoming mail");
  }
  incomingMail.mailAddressId = address || incomingMail.mailAddressId;
  incomingMail.hostMailAddressId = hostAddress || incomingMail.hostMailAddressId;
  incomingMail.convertMailAddressId = convertAddress || incomingMail.convertMailAddressId;
  await incomingMail.save()
  res.success({ incomingMail });
}

module.exports = { putIncomingMail };
