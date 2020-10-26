/**
 * Author: Isamu Isozaki
 * Note: All functions here return promises not objects but for the sake of simplicity, they just say they return
 * objects
 */
const { User } = require("./model");

/**
 * 
 * @param {object} data  user at ./model.js
 * Creates user
 */
function createUser(data) {
  return User.create(data);
}

/**
 * 
 * @param {mongoose object} user user
 * @param {object} updates updates to user
 * Update user with changes in updates 
 */
function updateUser(user, updates) {
  Object.assign(user, updates);
  return user.save();
}

/**
 * 
 * @param {string} userId user's id
 * @param {object} updates updates to user
 * Updates user at user's id with updates
 */
function updateUserById(userId, updates) {
  return User.updateOne({ _id: userId }, updates);
}

/**
 * 
 * @param {string} userId user's id
 * @param {object} param1 fields
 * Find user with userId
 */
function findUserById(userId, { fields } = {}) {
  return User.findOne({ _id: userId }).select(fields);
}

/**
 * 
 * @param {string} name username
 * @param {object} param1 fields
 * Find user based on username
 */
function findUserByUsername(name, { fields } = {}) {
  return User.findOne({ name }).select(fields);
}

/**
 * 
 * @param {object} param0 ids is list strings and object fields
 * Find user with id in ids
 */
function findUsers({ ids, fields }) {
  const query = { _id: { $in: ids } };
  return User.find(query).select(fields);
}

/**
 * 
 * @param {string} userId
 * Delete user at userId 
 */
function removeUserById(userId) {
  return User.deleteOne({_id: userId});
}


module.exports = {
  createUser,
  updateUser,
  updateUserById,
  findUserById,
  findUserByUsername,
  findUsers,
  removeUserById,
};
