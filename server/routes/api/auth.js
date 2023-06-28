const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');

const auth = require('../../middleware/auth');

//Bring in Models and Helpers
const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const sendgrid = require('../../services/sendgrid');
const keys = require('../../config/keys');
const { EMAIL_PROVIDER } = require('../../constants');

const { secret, tokenLife } = keys.jwt;

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email){
            return res.status(400).json({error: 'You must enter an email address.'});
        } 

        if(!password) {
            return res.status(400).json({error: 'You must enter a password.'});
        }
        
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).send({ error: 'No user found for this email address.' });
        }

        if(user && user.provider !== EMAIL_PROVIDER.Email) {
            return res.status(400).send({
                error: `That email address is already in use using ${user.provider} provider.`
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ success: false, error: 'Password Incorrect' });
        }

        const payload = {
            id: user.id
        };
        const token = jwt.sign(payload, secret, { expiresIn: tokenLife });

        if(!token){
            throw new Error();
        }

        res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

router.post('/reset', auth, async (req, res) => {
    try {
        const { password, confirmPassword } = req.body;
        const email = req.user.email;

        if(!email) {
            return res.status(401).send('Unauthenticated');
        }

        if(!password) {
            res.status(400).json({error: 'You must enter a password.'});
        }

        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            res.status(400).json({ error: 'That email address is already in use.'});
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch) {
            return res.status(400).json({ error: 'Please enter your correct old password'});
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(confirmPassword, salt);
        existingUser.password = hash;
        existingUser.save();
        //use sendgrid to send confirmation...

        res.status(200).json({ 
            success: true, 
            message: 'Password changed successfully. Please login with your new password.'
        });

    } catch (error) {
        res.status(400).json({ error: 'Your request could not be processed. Please try again.'});
    }
});

router.post('/reset/:token', auth, async (req, res) => {
    try {
        const { password } = req.body;

        if(!password) {
            return res.status(400).json({ error: 'You must enter a password' });
        }

        const resetUser = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if(!resetUser) {
            return res.status(400).json({ error: 'Your token has expired. Please attempt to reset your password again.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        resetUser.password = hash;
        resetUser.resetPasswordToken = undefined;
        resetUser.resetPasswordExpires = undefined;
        
        resetUser.save();

        //use sendgrid to send confirmation...

        res.status(200).json({ 
            success: true, 
            message: 'Password changed successfully. Please login with your new password.'
        });

    } catch (error) {
        res.status(400).json({ error: 'Your request could not be processed. Please try again.'});
    }
});
module.exports = router;