/**
 * Author: Isamu Isozaki
 */
const mongoose = require("mongoose");
/**
 * User Mail
 * privateMailAddressId: string of id of user mail's private mail address
 * mailAddressId: string of id of user mail's mail address
 * user: string of id of user who made the mail
 */
const userMailSchema = new mongoose.Schema(
    {
        privateMailAddressId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        mailAddressId: {
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

const UserMail = mongoose.model("UserMail", userMailSchema);

module.exports = { UserMail };
  