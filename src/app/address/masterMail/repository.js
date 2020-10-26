/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { MasterMail } = require("./model");
const { createMailAddress } = require("../mailAddress/repository");

/**
 * 
 * @param {object} data  masterMail at ./model.js
 * Creates master mail  
 */
function createMasterMail(data) {
  return MasterMail.create(data);
}

/**
 * 
 * @param {object} user  user with parameter name and _id
 * @param {string} name  mail address name
 * @param {object} otherData  data for other parameters in master mail, such as outgoingMailIds
 * Creates mail address and creates master mail and returns master mail
 */
async function createAddressAndMasterMail(user, name, otherData) {
  const mailAddress = await createMailAddress({
    user,
    name,
    isRcpt: true,
    isMaster: true,
  });
  return createMasterMail({
    mailAddressId: mailAddress._id,
    ...otherData,
  })
}

/**
 * 
 * @param {mongoose object} masterMail  master mail to update
 * @param {object} updates  updates
 * Updates master mail based on updates and returns updated version
 */
function updateMasterMail(masterMail, updates) {
  Object.assign(masterMail, updates);
  return masterMail.save();
}

/**
 * 
 * @param {string} masterMailAddressId  id of master mail address
 * @param {object} updates  updates
 * Updates master mail at masterMailAddressId based on updates and returns updated version
 */
function updateMasterMailById(masterMailAddressId, updates) {
  return MasterMail.updateOne({ _id: masterMailAddressId }, updates);
}

/**
 * 
 * @param {string} masterMailAddressId  id of master mail address
 * @param {object} param1  fields
 * Finds master mail based on master mail's id
 */
function findMasterMailById(masterMailAddressId, { fields } = {}) {
  return MasterMail.findOne({ _id: masterMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} mailAddressId  id for mail address in master mail
 * @param {object} param1  fields
 * Finds master mail based on mail address id
 */
function findMasterMailByMailAddressId(mailAddressId, { fields } = {}) {
  return MasterMail.findOne({ mailAddressId }).select(fields);
}

/**
 * 
 * @param {string} textHeader  text for textHeader
 * @param {object} param1  fields
 * Finds master mail based on text header
 */
function findMasterMailByTextHeader(textHeader, { fields } = {}) {
  return MasterMail.findOne({ textHeader }).select(fields);
}

/**
 * 
 * @param {string} id  id in outgoing ids
 * @param {object} param1  fields
 * Find all master mails with id in outgoing ids
 */
function findMasterMailByOutgoing(id, { fields } = {}) {
  return MasterMail.find({ outgoingIds: id }).select(fields);
}

/**
 * 
 * @param {string} id  id in instruct mail ids
 * @param {object} param1  fields
 * Find all master mails with id in instruct mail ids
 */
function findMasterMailByInstructMails(id, { fields } = {}) {
  return MasterMail.find({ instructMailIds: id }).select(fields);
}

/**
 * 
 * @param {string} user  user id
 * @param {object} param1  fields
 * Find all master mails which the user made
 */
function findMasterMailByUser(user, { fields } = {}) {
  return MasterMail.find({ user }).select(fields);
}

/**
 * 
 * @param {object} param0  ids which is a list of strings and object fields
 * Return all master mails with id in ids
 */
function findMasterMails({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return MasterMail.find(query).select(fields);
}

/**
 * 
 * @param {string} masterMailId  master mail id
 * Delete master mail with id masterMailId
 */
function removeMasterMailById(masterMailId) {
  return MasterMail.deleteOne({ _id: masterMailId });
}

module.exports = {
  createMasterMail,
  createAddressAndMasterMail,
  updateMasterMail,
  updateMasterMailById,
  findMasterMailById,
  findMasterMailByMailAddressId,
  findMasterMailByTextHeader,
  findMasterMailByOutgoing,
  findMasterMailByInstructMails,
  findMasterMailByUser,
  findMasterMails,
  removeMasterMailById,
};
