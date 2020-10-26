/**
 * Author: Isamu Isozaki
 */
const { createUserMail } = require("../repository");
const { findMailAddressByName, findOrMakeMailAddressByName} = require('@/app/address/mailAddress/repository');

/**
 * 
 * @param {object} req request with string mailAddress and privateMailAddress in req.body
 * @param {object} res response
 * If mailAddress is not already in use, create one, and find or create all outgoing mails and instruct mails.
 * Then, make user mail and respond with that.
 */
async function postUserMail(req, res) {
    const { mailAddress, privateMailAddress,} = req.body;
    let address = await findMailAddressByName(mailAddress);
    if(address && address.isRcpt) {
        return res.badRequest('Mail address already in use');
    }
    address = await findOrMakeMailAddressByName(req.user._id, mailAddress, {isRcpt: true});
    const privateAddress = await findOrMakeMailAddressByName(req.user._id, privateMailAddress);
    const userMail = await createUserMail({ 
        mailAddressId: address._id, privateMailAddressId: privateAddress._id, user: req.user._id,
    })
    res.success({ userMail });
}

module.exports = { postUserMail };
