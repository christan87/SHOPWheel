const Mongoose = require('mongoose');
const { ROLE_ADMIN, ROLE_MEMBER, ROLE_MERCHANT } = require('../constants');

const { Schema } = Mongoose;

const UserSchema = new Schema({
    email:{
        type: String,
        required: () => {
            return this.provider != 'email' ? false : true;
        }
    },
    phoneNumber:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    password:{
        type: String
    },
    Merchant:{
        type: Schema.Types.ObjectId,
        ref: 'Merchant',
        default: null
    },
    provider:{
        type: String,
        required: true,
        default: 'Email'
    },
    googleId:{
        type: String
    },
    facebookId:{
        type: String
    },
    avatar:{
        type: String
    },
    role:{
        type: String,
        default: ROLE_MEMBER,
        enum: [ROLE_ADMIN, ROLE_MEMBER, ROLE_MERCHANT]
    },
    resetPasswordToken: {type: String},
    resetPasswordExpires: {type: Date},
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }

});

module.exports = Mongoose.model('User', UserSchema);