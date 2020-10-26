/**
 * Author: Isamu Isozaki
 */
const mongoose = require("mongoose");
/**
 * Master Mail
 * mailAddressId: string of id of master mail's mail address
 * testHeader: string of alias of master mail. Not implemented yet
 * outgoingIds: list of strings of ids of mail address where the mail is sent when recieving mail from instruct mails
 * instructMailIds: list of strings of ids mail addresses which are instruct mails. Read REAME for details
 * user: string of id of user who made the mail
 */
const masterMailSchema = new mongoose.Schema(
    {
        mailAddressId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        textHeader: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        outgoingIds: {
            type: [mongoose.Schema.Types.String],
            required: true,
        },
        instructMailIds: {
            type: [mongoose.Schema.Types.String],
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

const MasterMail = mongoose.model("MasterMail", masterMailSchema);

module.exports = { MasterMail };
  