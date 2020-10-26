/**
 * Author: Isamu Isozaki
 */
const router = require("express").Router();
const { authenticateUser } = require("@/middlewares/auth");

router.use(authenticateUser);

/**
 * Delete
 */
const { deleteUserMail } = require("./controllers/deleteUserMail");
router.delete("/:userMailId", deleteUserMail);

/**
 * Get
 */
const { getUserMails } = require("./controllers/getUserMails");
router.get("/", getUserMails);

/**
 * Post
 */
const { postUserMail } = require("./controllers/postUserMail");
router.post("/", postUserMail);

/**
 * Put
 */
const { putUserMail } = require("./controllers/putUserMail");
router.put("/:userMailId", putUserMail);

module.exports = router;