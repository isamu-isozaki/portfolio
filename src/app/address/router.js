/**
 * Author: Isamu Isozaki
 */
const router = require('express').Router();

/**
 * Incoming Mail
 */
const incomingMailRouter = require('./incomingMail/router');
router.use('/incoming', incomingMailRouter);

/**
 * Master Mail
 */
const masterMailRouter = require('./masterMail/router');
router.use('/master', masterMailRouter);

/**
 * User Mail
 */
const userMailRouter = require('./userMail/router');
router.use('/user', userMailRouter);

module.exports = router;
