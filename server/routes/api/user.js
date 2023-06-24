const express = require('express');
const router = express.Router();

// Bring in Models and Helpers
const User = require('../../models/user');
const auth = require('../../middleware/auth');

router.get('/', auth, async (req, res) => {
    try {
        const user = req.user._id;
        const userDoc = await User.findById(user, { password: 0 });
        res.status(200).json({
            user: userDoc
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again'
        });
    }
});

router.put('/', auth, async (req, res) => {
    try {
        const user = req.user._id;
        const update = req.body.profile;
        const query = { _id: user };

        const userDoc = await User.findOneAndUpdate(query, update, { new: true});

        res.status(200).json({
            success: true,
            message: 'Your profile has been successfully udated!',
            user: userDoc
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your profile has "not" been udated. Please try again.'
        });
    }
});

module.exports = router;