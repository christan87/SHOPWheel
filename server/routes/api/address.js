const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const auth = require('../../middleware/auth');
const Address = require('../../models/address');

//fetch all addresses api
router.get('/', auth, async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user._id });

        res.status(200).json({
            addresses
        });

    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be prossessed. Please try again'
        });
    }
});

router.get('/:id', auth, async(req, res) => {
    // code..
});

module.exports = router;