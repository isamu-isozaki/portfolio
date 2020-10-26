/**
 * Author: Isamu Isozaki
 */
const router = require("express").Router();
const { authenticateUser } = require("@/middlewares/auth");

router.use(authenticateUser);

/**
 * Delete
 */
const { deleteMasterMail } = require("./controllers/deleteMasterMail");
router.delete("/:masterMailId", deleteMasterMail);

/**
 * Get
 */
const { getMasterMails } = require("./controllers/getMasterMails");
router.get("/", getMasterMails);

/**
 * Post
 */
const { postMasterMail } = require("./controllers/postMasterMail");
router.post("/", postMasterMail);

/**
 * Put
 */
const { putMasterMail } = require("./controllers/putMasterMail");
router.put("/:masterMailId", putMasterMail);

module.exports = router;