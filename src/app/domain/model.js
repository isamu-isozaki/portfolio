/**
 * Author: Isamu Isozaki
 * This is a database of all domains registered to the aws server
 */
const mongoose = require("mongoose");
/**
 * Domain
 * name: string of domain name
 * user: string of id of user who made the mail
 */
const domainSchema = new mongoose.Schema(
    {
        name: {
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

const Domain = mongoose.model("Domain", domainSchema);

module.exports = { Domain };
  