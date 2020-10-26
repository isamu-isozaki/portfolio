/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { Domain } = require("./model");

/**
 * 
 * @param {object} data  domain at ./model.js
 * Creates domain
 */
function createDomain(data) {
  return Domain.create(data);
}

/**
 * 
 * @param {mongoose object} domain  domain
 * @param {object} updates  updates
 * Updates domain based on updates
 */
function updateDomain(domain, updates) {
  Object.assign(domain, updates);
  return domain.save();
}

/**
 * 
 * @param {string} domainId  domain id
 * @param {object} updates  updates
 * Updates domain at domainId based on updates
 */
function updateDomainById(domainId, updates) {
  return Domain.updateOne({ _id: domainId }, updates);
}

/**
 * Find all domains
 */
function findAllDomains() {
  return Domain.find({});
}

/**
 * 
 * @param {string} domainId  domain id
 * @param {object} param1  fields
 * Find domain based on domain's id
 */
function findDomainById(domainId, { fields } = {}) {
  return Domain.findOne({ _id: domainId }).select(fields);
}

/**
 * 
 * @param {string} name  domain name
 * @param {object} param1  fields
 * Find domain based on domain name
 */
function findDomainByName(name, { fields } = {}) {
  return Domain.findOne({ name }).select(fields);
}

/**
 * 
 * @param {string} user  user id
 * @param {object} param1  fields
 * Find domain based on the user
 */
function findDomainByUser(user, { fields } = {}) {
  return Domain.find({ user }).select(fields);
}

/**
 * 
 * @param {object} param0  ids, a list of strings, and  fields
 * Find all domains with id in ids
 */
function findDomains({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return Domain.find(query).select(fields);
}

/**
 * 
 * @param {string} domainId  domain id
 * Remove domain by id and return the deleted domain
 */
function removeDomainById(domainId) {
  return Domain.deleteOne({ _id: domainId });
}

module.exports = {
  createDomain,
  updateDomain,
  updateDomainById,
  findAllDomains,
  findDomainByName,
  findDomainById,
  findDomainByUser,
  findDomains,
  removeDomainById,
};
