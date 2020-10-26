/**
 * Author: Isamu Isozaki
 */
const { findUserMailById, updateUserMail } = require("../repository");
const { findOrMakeMailAddressByName} = require('@/app/address/mailAddress/repository');

/**
 * 
 * @param {object} req request with string mailAddress or privateMailAddress in req.body.data
 * @param {object} res response
 * For non-null parameter of mailAddress and privateMailAddress update the mail address by 
 * Creating or finding with findOrMakeMailAddressByName and update user mail.
 * Respond with the updated user mail.
 */
async function putUserMail(req, res) {
  const { mailAddress, privateMailAddress,} = req.body.data;
  const address = mailAddress && (
    await findOrMakeMailAddressByName(req.user._id, mailAddress, {isRcpt: true})
  )._id;
  const privateAddress = privateMailAddress && (
    await findOrMakeMailAddressByName(req.user._id, privateMailAddress)
  )._id;
  const userMail = await findUserMailById(req.params.userMailId);
  if(!userMail) {
    return res.badRequest("can't change invalid user mail");
  }
  userMail.mailAddressId = address || userMail.mailAddressId;
  userMail.privateMailAddressId = privateAddress || userMail.privateMailAddressId;
  await userMail.save();
  res.success({ userMail });
}

module.exports = { putUserMail };
