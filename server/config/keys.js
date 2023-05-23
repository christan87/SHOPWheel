module.exports = {
    app: {
        name: 'SHOP Wheel',
        apiURL: process.env.BASE_API_URL,
        serverURL: process.env.BASE_SERVER_URL,
        clientURL: process.env.BASE_CLIENT_URL
    },
    port: process.env.PORT || 3000,
    database: {
        url: process.env.MONGO_URI
    },
    mailchimp: {
        key: process.env.MAILCHIMP_KEY,
        listKey: process.env.MAILCHIMP_LIST_KEY
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        tokenLife: '7d' // 7 days
    },
    sendgrid: {
        key: process.env.SENDGRID_KEY,
        domain: process.env.SENDGRID_DOMAIN,
        sender: process.env.SENDGRID_EMAIL_SENDER
    },
    mailgun: {
        key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        sender: process.env.MAILGUN_EMAIL_SENDER
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    facebook: {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        bucketName: process.env.AWS_BUCKET_NAME
    }
};