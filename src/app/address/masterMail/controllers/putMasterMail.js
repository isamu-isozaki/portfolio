/**
 * Author: Isamu Isozaki
 */
const { findMasterMailById, updateMasterMail } = require("../repository");
const {findOrMakeMailAddressByName, findMailAddressByName} = require('@/app/address/mailAddress/repository');
/**
 * 
 * @param {object} req request with string mailAddress, textHeader, and list of strings
 * outgoing, instructMails in req.body.data
 * @param {object} res response
 * For non-null parameter of mailAddress, textHeader, outgoing, instructMails, update the mail address by 
 * Creating or finding with findOrMakeMailAddressByName and update master mail.
 * Respond with the updated master mail.
 */
async function putMasterMail(req, res) {
  const { mailAddress, textHeader, outgoing, instructMails,} = req.body.data;
  const masterMail = await findMasterMailById(req.params.masterMailId);
  if(!masterMail) {
    return res.badRequest("can't change invalid master mail");
  }
  const address = mailAddress && (
    await findOrMakeMailAddressByName(req.user._id, mailAddress, {isRcpt: true, isMaster: true})
  )._id;
  const outgoingIds = outgoing && (
    await Promise.all(
      outgoing.map(async outgoingAddress => 
          (await findOrMakeMailAddressByName(req.user._id, outgoingAddress))._id
      )
    )
  );
  const instructMailIds = instructMails && (
    await Promise.all(
      instructMails.map(async instructAddress => 
          (await findOrMakeMailAddressByName(req.user._id, instructAddress))._id
      )
    )
  );
  masterMail.mailAddressId = address  || masterMail.mailAddressId;
  masterMail.textHeader = textHeader || masterMail.textHeader;
  masterMail.outgoingIds = outgoingIds || masterMail.outgoingIds;
  masterMail.instructMailIds = instructMailIds || masterMail.instructMailIds;
  await masterMail.save();
  res.success({ masterMail });
}

module.exports = { putMasterMail };
