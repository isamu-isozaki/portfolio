/**
 * Author: Isamu Isozaki
 */
const { createMail } = require("../repository");
const { findMailAddressByName, findOrMakeMailAddressByName} = require('@/app/address/mailAddress/repository');
const _ = require('lodash');
const { exec } = require("child_process");

/**
 * 
 * @param {object} req request with string from, to,
 * headers in format [[header, data],...] currently only supports [["Subject", subject_data]], 
 * string body, boolean send in req.body.data
 * @param {object} res response
 * Save new mail to database and if send is true, send mail too using the mail function.
 */
async function postMail(req, res) {
    const { from, to, headers, body, send } = req.body.data;
    const fromMail = await findMailAddressByName(from);
    if(send && (!fromMail || !fromMail.isRcpt)) {
        return res.badRequest('Mail address not registered');
    }
    const toMail = await findOrMakeMailAddressByName(fromMail.user, to);
    const mail = await createMail({ 
        user: req.user._id,
        fromId: fromMail._id,
        toId: [toMail._id],
        headers: headers || [[]],
        body,
    });
    if(send) {
        const subject = headers.filter(header => header[0] === 'Subject')[0][1];

        exec(`echo ${body} | mail -s ${subject} -r <${from}> ${to}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
    res.success({ mail });
}

module.exports = { postMail };
