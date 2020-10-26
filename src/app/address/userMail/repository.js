/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { UserMail } = require("./model");
const { createMailAddress } = require("../mailAddress/repository");

/**
 * 
 * @param {object} data  userMail at ./model.js
 * Creates user mail  
 */
function createUserMail(data) {
  return UserMail.create(data);
}

/**
 * 
 * @param {string} user sring of id or user
 * @param {string} name  name of mail address
 * @param {object} otherData  other data in user mail, such as privateMailAddressId
 * Creates mail address and then creates user mail
 */
async function createAddressAndUserMail(user, name, otherData) {
  const mailAddress = await createMailAddress({
    user,
    name,
    isRcpt: true,
    isMaster: false,
  });
  return createUserMail({
    mailAddressId: mailAddress._id,
    ...otherData,
  })
}

/**
 * 
 * @param {mongoose object} userMail mongoose  user mail
 * @param {object} updates  updates
 * Updates user mail with updates
 */
function updateUserMail(userMail, updates) {
  Object.assign(userMail, updates);
  return userMail.save();
}

/**
 * 
 * @param {string} userMailAddressId  id of user mail to update
 * @param {object} updates  updates
 * Updates user mail at userMailAddressId with updates
 */
function updateUserMailById(userMailAddressId, updates) {
  return UserMail.updateOne({ _id: userMailAddressId }, updates);
}

/**
 * 
 * @param {string} userMailAddressId  id of user mail to find
 * @param {object} param1  fields
 * Finds user mail with id userMailAddressId
 */
function findUserMailById(userMailAddressId, { fields } = {}) {
  return UserMail.findOne({ _id: userMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} userMailAddressId  id of mail address
 * @param {object} param1  fields
 * Finds user mail based on mail address id
 */
function findUserMailByMailAddressId(mailAddressId, { fields } = {}) {
  return UserMail.findOne({ mailAddressId }).select(fields);
}

/**
 * 
 * @param {string} user  user id
 * @param {object} param1  fields
 * Finds user mails of user
 */
function findUserMailByUser(user, { fields } = {}) {
  return UserMail.find({ user }).select(fields);
}

/**
 * 
 * @param {object} param0  ids, a list of strings, and object fields
 * Finds all user mails with id in ids
 */
function findUserMails({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return UserMail.find(query).select(fields);
}

/**
 * 
 * @param {string} userMailId  user mail id
 * Deletes user mail with userMailId
 */
function removeUserMailById(userMailId) {
  return UserMail.deleteOne({ _id: userMailId });
}

module.exports = {
  createUserMail,
  updateUserMail,
  createAddressAndUserMail,
  findUserMailByMailAddressId,
  updateUserMailById,
  findUserMailById,
  findUserMailByUser,
  findUserMails,
  removeUserMailById,
};
