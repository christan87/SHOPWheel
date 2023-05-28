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

module.exports = router;