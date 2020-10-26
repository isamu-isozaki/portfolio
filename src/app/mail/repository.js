/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { Mail } = require("./model");
/**
 * 
 * @param {object} data  mail at ./model.js
 * Creates mail
 */
function createMail(data) {
  return Mail.create(data);
}

/**
 * 
 * @param {string} mailId  mail id
 * @param {object} param1  fields
 * Finds mail based on id
 */
function findMailById(mailId, { fields } = {}) {
  return Mail.findOne({ _id: mailId }).select(fields);
}

/**
 * 
 * @param {string} user  user id
 * @param {object} param1  fields
 * Finds mail based on user
 */
function findMailsByUser(user, { fields } = {}) {
  return Mail.find({ user }).select(fields);
}

/**
 * 
 * @param {string} fromMailAddressId  from mail address's id
 * @param {object} param1  fields
 * Find mails based on from mail address
 */
function findMailByFromMailAddressId(fromMailAddressId, { fields } = {}) {
  return Mail.find({ fromMailAddressId }).select(fields);
}

/**
 * 
 * @param {string} toMailAddressId  to mail address's id
 * @param {object} param1  fields
 * Find mailbs based on to mail address
 */
function findMailByToMailAddressId(toMailAddressId, { fields } = {}) {
  return Mail.find({ toMailAddressId }).select(fields);
}

/**
 * 
 * @param {object} param0  ids, list of strings, and object fields
 * Find mails with id in ids
 */
function findMails({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return Mail.find(query).select(fields);
}

module.exports = {
  createMail,
  findMailById,
  findMailsByUser,
  findMailByFromMailAddressId,
  findMailByToMailAddressId,
  findMails,
};
