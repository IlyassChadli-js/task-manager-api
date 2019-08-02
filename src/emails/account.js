const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ilyasschadli.dev@gmail.com',
        subject: 'Thanks for joinig in!',
        text: `Welcome to the app, ${name}. Let me know how you get alonng with the app.`
    })
}
const sendCancelationtEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ilyasschadli.dev@gmail.com',
        subject: 'Sorry to see you go.',
        text: `Goodbye, ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationtEmail
}