const sgMail = require('@sendgrid/mail');
const template = require('../config/template');
const keys = require('../config/keys');

const {key, sender} = keys.sendgrid;

sgMail.setApiKey(key);

exports.sendEmail = async (email, type, host, data) => {
    try {
        const message = prepareTemplate(type, host, data);
        const msg = {
            from: `SHOP Wheele! <${sender}>`,
            to: email,
            subject: message.subject,
            text: message.text
        };
        return await sgMail.send(msg)
    } catch (error) {
        return error;
    }
};

const prepareTemplate = (type, host, data) => {
    let message;

    switch(type) {
        case 'reset' :
            message = template.resetEmail(host, data);
            break;
        case 'reset-confirmation' :
            message = template.confirmResetPasswordEmail();
            break;
        case 'signup' : 
            message = template.signupEmail(data);
            break;
        case 'merchant-signup' :
            message = template.merchantSignup(host, data);
            break;
        case 'merchant-welcome' :
            message = template.merchantWelcome(data);
            break;
        case 'newsletter-subscription' :
            message = template.newsletterSubscriptionEmail();
            break;
        case 'contact':
            message = template.contactEmail();
            break;
        case 'merchant-application' :
            message = template.merchantApplicationEmail();
            break;
        case 'order-confirmation' :
            message = template.orderConfirmationEmail(data);
            break;
        default:
            message = '';
    }
    return message
} 