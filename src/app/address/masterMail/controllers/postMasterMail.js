/**
 * Author: Isamu Isozaki
 */
const { createMasterMail } = require("../repository");
const { findOrMakeMailAddressByName, findMailAddressByName, createMailAddress} = require('@/app/address/mailAddress/repository');

/**
 * 
 * @param {object} req request with string mailAddress, textHeader, and list of strings
 * outgoing, instructMails in req.body
 * @param {object} res response
 * If mailAddress is not already in use, create one, and find or create all outgoing mails and instruct mails.
 * Then, make master mail and respond with that.
 */
async function postMasterMail(req, res) {
    const { mailAddress, textHeader, outgoing, instructMails,} = req.body;
    let address = await findMailAddressByName(mailAddress);
    if(address && address.isRcpt) {
        return res.badRequest('Mail address already in use');
    }
    address = await findOrMakeMailAddressByName(req.user._id, mailAddress, {isRcpt: true, isMaster: true});
    const outgoingIds = await Promise.all(
        outgoing.map(async outgoingAddress => 
            (await findOrMakeMailAddressByName(req.user._id, outgoingAddress))._id
        )
    );
    const instructMailIds = await Promise.all(
        instructMails.map(async instructAddress => 
            (await findOrMakeMailAddressByName(req.user._id, instructAddress))._id
        )
    );
    const masterMail = await createMasterMail({ 
        mailAddressId: address._id, textHeader, outgoingIds, instructMailIds, user: req.user._id,
    })
    res.success({ masterMail });
}

module.exports = { postMasterMail };
