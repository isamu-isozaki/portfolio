/**
 * Author: Isamu Isozaki
 */
const router = require("express").Router();
const { authenticateUser } = require("@/middlewares/auth");

router.use(authenticateUser);

/**
 * Call delete
 */
const { deleteIncomingMail } = require("./controllers/deleteIncomingMail");
router.delete("/:incomingMailId", deleteIncomingMail);

/**
 * Call get
 */
const { getIncomingMails } = require("./controllers/getIncomingMails");
router.get("/", getIncomingMails);

/**
 * Call post
 */
const { postIncomingMail } = require("./controllers/postIncomingMail");
router.post("/", postIncomingMail);

/**
 * Call put
 */
const { putIncomingMail } = require("./controllers/putIncomingMail");
router.put("/:incomingMailId", putIncomingMail);

module.exports = router;