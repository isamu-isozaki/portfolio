/**
 * Author: Isamu Isozaki
 */
const { createIncomingMail } = require("../repository");
const {findOrMakeMailAddressByName, findMailAddressByName} = require('@/app/address/mailAddress/repository');
/**
 * 
 * @param {object} req request with string mailAddress name, hostMailAddress name, and convertMailAddress name in req.body
 * @param {object} res response
 * Find or create mail address for mailAddress and convertMailAddress and find hostMailAddress.
 * Then, create incomingMail with those as input.
 * Note: hostMailAddress already needs to be made in masterMail or userMail for this post request to be done.
 * That is done in the react app.
 */
async function postIncomingMail(req, res) {
    const { mailAddress, hostMailAddress, convertMailAddress,} = req.body;
    const address = await findOrMakeMailAddressByName(req.user._id, mailAddress);
    const convertAddress = await findOrMakeMailAddressByName(req.user._id, convertMailAddress, {isRcpt: true});
    const hostAddress = await findMailAddressByName(hostMailAddress);
    const incomingMail = await createIncomingMail({ 
        mailAddressId: address._id, hostMailAddressId: hostAddress._id, 
        convertMailAddressId: convertAddress._id, user: req.user._id,
    })
    res.success({ incomingMail });
}

module.exports = { postIncomingMail };
