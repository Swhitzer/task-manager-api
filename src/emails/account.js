const nsMail = require('./nsMail');

nsMail.setApiKey(process.env.NOTISEND_API_KEY);

const sendWelcomeEmail = (email, name) => {
    nsMail.send({
        to: email,
        from_email: 'lolpoulol@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Dear ${name}, welcome to the app! Please let me know how you get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    nsMail.send({
        to: email,
        from_email: 'lolpoulol@gmail.com',
        subject: 'I am sorry to hear that you are leaving',
        text: `Dear ${name}, it's sad that you are leaving, what have i done wrong? What can i do about it? Please respond, my dear friend...`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}