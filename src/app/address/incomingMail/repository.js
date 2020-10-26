/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { IncomingMail } = require("./model");
const {findMailAddressByName, createMailAddress} = require("../mailAddress/repository");
const crypto = require('crypto');

/**
 * 
 * @param {object} data incomingMail at ./model.js
 * Creates incoming mail  
 */
function createIncomingMail(data) {
  return IncomingMail.create(data);
}
/**
 * @param {object} user user with parameter name and _id
 * @param {object} rcpt recipient mail with parameter name
 * Create convert mail address's mail address with randomized name
 */
function createConvertAddress(user, rcpt) {
  const convertName = user.name.split(' ')[0] + '_' + crypto.randomBytes(10).toString('hex') + '@' + rcpt.name.split('@')[1];
  return createMailAddress({
    user: user._id,
    name: convertName,
    isRcpt: true,
  });
}
/**
 * 
 * @param {object} from mail address from which the mail is coming from
 * @param {object} rcpt mail address to which the mail is sent
 * @param {object} user user who creates the incoming mail
 */
async function createConvertAndIncomingMail(from, rcpt, user) {
  const convert = await createConvertAddress(user, rcpt);
  return createIncomingMail({
    mailAddressId: from._id,
    hostMailAddressId: rcpt._id,
    convertMailAddressId: convert._id,
    user: user._id,
  });
}

/**
 * 
 * @param {string} fromText name of mail address from which mail is sent
 * @param {object} rcpt recipient mail address
 * @param {object} user user
 * Create new mail address from fromText and call createConvertAndIncomingMail
 */
async function createNewFromAndIncomingMail(fromText, rcpt, user) {
  from = await createMailAddress({
    user: user._id,
    name: fromText,
  });
  return createConvertAndIncomingMail(from, rcpt, user);
}
/**
 * 
 * @param {mongoose object} incomingMail incoming mail
 * @param {object} updates changes to incoming mail
 * Updates incoming mail in argument based on changes and save, and return the final result
 */
function updateIncomingMail(incomingMail, updates) {
  Object.assign(incomingMail, updates);
  return incomingMail.save();
}

/**
 * 
 * @param {string} incomingMailAddressId the id of the incomingMail that is getting updated
 * @param {object} updates the changes to incoming mail
 * @param {string} incomingMailAddressId the id of the incomingMail that is getting updated
 * Updates the incoming mail at incomingMailAddressId by updates
 */
function updateIncomingMailById(incomingMailAddressId, updates) {
  return IncomingMail.updateOne({ _id: incomingMailAddressId }, updates);
}
/**
 * 
 * @param {string} fromText  name of mail address from which mail is sent
 * @param {object} rcpt  recipient mail address
 * @param {object} user  user
 * Finds or create incomingMail object and returns that
 */
async function findOrMakeIncomingMailByFromAndRCPT(fromText, rcpt, user) {
  let from = await findMailAddressByName(fromText);
  if(!from) {
    return createNewFromAndIncomingMail(fromText, rcpt, user);
  } else {
    const incomingMail = (await IncomingMail.findOne({
      mailAddressId: from._id, 
      hostMailAddressId: rcpt._id,
    })) || (await IncomingMail.findOne({
      convertMailAddressId: rcpt._id,
    }));
    if(!incomingMail) {
      return createConvertAndIncomingMail(from, rcpt, user);
    }
    return incomingMail;
  }
}

/**
 * 
 * @param {string} incomingMailAddressId  incomingMail's id
 * @param {object} param1  fields to include. 
 * Returns incoming mail corresponding to _id
 */
function findIncomingMailById(incomingMailAddressId, { fields } = {}) {
  return IncomingMail.findOne({ _id: incomingMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} mailAddressId  mailAddress's id in incoming mail
 * @param {object} param1  fields to include. 
 * Returns the incoming mail corresponding to the mailAddress _id
 */
function findIncomingMailByMailAddressId(mailAddressId, { fields } = {}) {
  return IncomingMail.findOne({ mailAddressId }).select(fields);
}
/**
 * 
 * @param {string} hostMailAddressId  hostMailAddress's id in incoming mail
 * @param {object} param1  fields to include. 
 * Returns the incoming mail corresponding to the hostMailAddress _id
 */
function findIncomingMailByHostMailAddressId(hostMailAddressId, { fields } = {}) {
  return IncomingMail.findOne({ hostMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} convertMailAddressId  convertMailAddress's id in incoming mail
 * @param {object} param1  fields to include. 
 * Returns the incoming mail corresponding to the convertMailAddress _id
 */
function findIncomingMailByConvertMailAddressId(convertMailAddressId, { fields } = {}) {
  return IncomingMail.findOne({ convertMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} user  user _id
 * @param {object} param1  fields to include. 
 * Return incoming mails corresponding to user _id
 */
function findIncomingMailByUser(user, { fields } = {}) {
  return IncomingMail.find({ user }).select(fields);
}

/**
 * 
 * @param {object} param0  ids and fields. ids is a list of strings that are incomingMail ids. fields are  fields to include
 * Return incoming mails corresponding to their ids
 */
function findIncomingMails({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return IncomingMail.find(query).select(fields);
}

/**
 * 
 * @param {string} incomingMailId  id of incomingMail that's getting deleted
 * Deletes incoming mail with id incomingMailId
 */
function removeIncomingMailById(incomingMailId) {
  return IncomingMail.deleteOne({ _id: incomingMailId });
}

/**
 * 
 * @param {string} hostMailAddressId  id of hostMailAddress in incomingMail
 * Deletes all incoming mail which has hostMailAddressId as it's hostMailAddress
 */
function removeIncomingMailByHostMail(hostMailAddressId) {
  return IncomingMail.deleteMany({hostMailAddressId});
}

module.exports = {
  createIncomingMail,
  updateIncomingMail,
  updateIncomingMailById,
  findIncomingMailById,
  findIncomingMailByMailAddressId,
  findIncomingMailByHostMailAddressId,
  findIncomingMailByConvertMailAddressId,
  findOrMakeIncomingMailByFromAndRCPT,
  findIncomingMailByUser,
  findIncomingMails,
  removeIncomingMailById,
  removeIncomingMailByHostMail,
};
