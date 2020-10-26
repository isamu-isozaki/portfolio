/**
 * Author: Isamu Isozaki
 */
const mongoose = require("mongoose");
/**
 * Incoming Mail
 * user: string of id of user who made the mail
 * name: string of name of email address
 * isRcpt: boolean. True for mails which can recieve mail in the server
 * isMaster: boolean. True if master mail
 */
const mailAddressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        isRcpt: {
            type: mongoose.Schema.Types.Boolean,
            default: false,
        },
        isMaster: {
            type: mongoose.Schema.Types.Boolean,
            default: false,
        }
    },
    { 
        timestamps: { createdAt: true, updatedAt: false },
        toJSON: { versionKey: false }, 
        toObject: { versionKey: false } 
    }
);

const MailAddress = mongoose.model("mailAddress", mailAddressSchema);

module.exports = { MailAddress };
  