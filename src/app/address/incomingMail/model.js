/**
 * Author: Isamu Isozaki
 */
const mongoose = require("mongoose");
/**
 * Incoming Mail
 * mailAddressId: string of id of mail address where the mail is coming from
 * hostMailAddressId: string of id of mail address where the mail is sent
 * convertMailAddressId: string of id for mail address which corresponds to mailAddress
 * user: string of id of user who made the mail
 */
const incomingMailSchema = new mongoose.Schema(
    {
        mailAddressId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        hostMailAddressId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        convertMailAddressId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
    },
    { 
        timestamps: { createdAt: true, updatedAt: false },
        toJSON: { versionKey: false }, 
        toObject: { versionKey: false } 
    }
);

const IncomingMail = mongoose.model("IncomingMail", incomingMailSchema);

module.exports = { IncomingMail };
  