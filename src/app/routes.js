/**
 * Author: Isamu Isozaki
 */
const router = require('express').Router();

/**
 * User
 */
const userRouter = require('./user/router');
router.use('/user', userRouter);

/**
 * Address of incoming mail, master mail, user mail, and usual mail
 */
const addressRouter = require('./address/router');
router.use('/address', addressRouter);

/**
 * Domain
 */
const domainRouter = require('./domain/router');
router.use('/domain', domainRouter);

/**
 * Mail
 */
const mailRouter = require('./mail/router');
router.use('/mail', mailRouter);

module.exports = router;