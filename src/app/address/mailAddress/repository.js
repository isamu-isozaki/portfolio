/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { MailAddress } = require("./model");
/**
 * 
 * @param {object} data  MailAddress in ./model.js
 * Creates mail address
 */
function createMailAddress(data) {
  return MailAddress.create(data);
}

/**
 * 
 * @param {mongoose object} mailAddress  mail address
 * @param {object} updates object that is the changes to mail address
 * Updates mail address based on updates
 */
function updateMailAddress(mailAddress, updates) {
  Object.assign(mailAddress, updates);
  return mailAddress.save();
}

/**
 * 
 * @param {string} mailAddressId  mail address id
 * @param {object} updates object that is the changes to mail address
 * Updates mail address of mailAddressId based on updates
 */
function updateMailAddressById(mailAddressId, updates) {
  return MailAddress.updateOne({ _id: mailAddressId }, updates);
}

/**
 * 
 * @param {string} mailAddressId  mail address id
 * @param {object} param1  fields
 * Finds mail address based on mailAddressId
 */
function findMailAddressById(mailAddressId, { fields } = {}) {
  return MailAddress.findOne({ _id: mailAddressId }).select(fields);
}

/**
 * 
 * @param {string} name  name of mail address
 * @param {object} param1  fields
 * Finds mail address based on mail address name
 */
function findMailAddressByName(name, { fields } = {}) {
  return MailAddress.findOne({ name }).select(fields);
}

/**
 * 
 * @param {string} user  user id
 * @param {string} name  name of mail address
 * @param {object} otherData optional  parameters in mailAddress such as isRcpt and isMaster 
 * which to include when creating mail address
 * @param {object} param3  fields
 * Finds or creates mail address
 */
async function findOrMakeMailAddressByName(user, name, otherData={}, { fields } = {}) {
  const mailAddress = await MailAddress.findOne({ name }).select(fields);
  if(!mailAddress) {
    return await createMailAddress({user, name, ...otherData});
  }
  return mailAddress;
}

/**
 * 
 * @param {object} param0  ids and fields. ids is a list of  mail address ids and 
 * fields is an  fields
 * Find all mail addresses with id in ids
 */
function findMailAddresss({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return MailAddress.find(query).select(fields);
}

/**
 * 
 * @param {object} mailAddress mongoose mail address object to update
 * @param {object} updates  changes to make
 * Updates mail address and returns the updated mail address object
 */
function updateMailAddress(mailAddress, updates) {
  Object.assign(mailAddress, updates);
  return mailAddress.save();
}

/**
 * 
 * @param {string} mailAddressId  mail address
 * Deletes mail address which has id mailAddressId and returns that mail address
 */
function removeMailAddressById(mailAddressId) {
  return MailAddress.deleteOne({ _id: mailAddressId });
}

module.exports = {
  createMailAddress,
  updateMailAddress,
  updateMailAddressById,
  findMailAddressById,
  findMailAddressByName,
  findOrMakeMailAddressByName,
  findMailAddresss,
  removeMailAddressById,
};
