/**
 * Author: Isamu Isozaki
 */
const mongoose = require("mongoose");

/**
 * name: string. User name
 * email: string, Mail address id
 * translationLoc: string. Must be one of [top, bottom, only]
 * type: string. Must be one of [free, admin, user]
 * lang: string. Must be in ['ja', 'ko', 'zh-CN', 'zh-TW', 'en']
 * textBeforeOriginal: string. The text before the original text
 * textBeforeTranslated: string. The text to put before the translated text
 */
const userSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        translationLoc: {
            type: mongoose.Schema.Types.String,
            default: "bottom",
        },
        type: {
            type: mongoose.Schema.Types.String,
            default: "free",
        },
        lang: {
            type: mongoose.Schema.Types.String,
            default: "ja",
        },
        textBeforeOriginal: {
            type: mongoose.Schema.Types.String,
            default: "Original:",
        },
        textBeforeTranslated: {
            type: mongoose.Schema.Types.String,
            default: "Translated:",
        },
    },
    { 
        timestamps: { createdAt: true, updatedAt: false },
        toJSON: { versionKey: false }, 
        toObject: { versionKey: false } 
    }
);


const User = mongoose.model("User", userSchema);

module.exports = { User };
  