const MailChimp = require('mailchimp-api-v3');

const keys = require('../config/keys');

const { key, listKey } = keys.mailchimp;

class MailChimpService {
    init() {
        try {
            return new MailChimp(key);
        } catch (error) {
            console.warn('missing mailgun keys...');
        }
    }
}

const mailchimp = new MailChimpService().init();

exports.subscribeToNewsletter = async email => {
    try {
        return await mailchimp.post(`lists/${listKey}/members`, {
            email_address: email,
            status: 'subscribed'
        });
    } catch (error) {
        return error;
    }
};