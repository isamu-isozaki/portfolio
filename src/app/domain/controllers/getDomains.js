/**
 * Author: Isamu Isozaki
 */
const { findAllDomains} = require('../repository');
const _keyBy = require("lodash/keyBy");

/**
 * 
 * @param {object} req request
 * @param {object} res response
 * Find all domains and put in format {_id1: domain with _id1}
 */
async function getDomains(req, res) {
  const domains = await findAllDomains();
  res.success({ domains: _keyBy(domains, '_id') });
}

module.exports = { getDomains };
