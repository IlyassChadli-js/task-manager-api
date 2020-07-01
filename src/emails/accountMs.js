// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
setTimeout(timeout) {
    if (typeof timeout === 'undefined') {
        return
    }
    this.client.setDefaultRequest('timeout', timeout)
}
sgMail.setApiKey('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');
const msg = {
    to: 'muchrooms.app@gmail.com',
    from: 'muchrooms.app@gmail.com',
    subject: 'Welcome to Muchrooms (DO NOT REPLY)',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
/**
 * Set client timeout
 */

sgMail.setTimeout(6000)
sgMail.send(msg);