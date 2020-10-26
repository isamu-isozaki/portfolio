/**
 * Author: Isamu
 * Mail database to save mail. Mail currently saves all mail sent to server yet not the mail sent out
 */
const mongoose = require("mongoose");
/**
 * Domain
 * user: string of id of user
 * fromId: string of mail address id of where the mail is sent from
 * toId: string of mail address id of where the mail is sent to
 * headers: list of list of 2 strings. headers represented by [[header, header value]...]. For example, [['Subject', 'hi]...]
 * body: string of body text
 */
const mailSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        fromId: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        toId: {
            type: [mongoose.Schema.Types.String],
            required: true,
        },
        headers: {
            type: [[mongoose.Schema.Types.String, mongoose.Schema.Types.String]],
            default: [[]],
        },
        body: {
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

const Mail = mongoose.model("Mail", mailSchema);

module.exports = { Mail };
  