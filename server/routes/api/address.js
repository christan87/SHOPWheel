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
    try {
        const addressId = req.params.id;
        const update = req.body;
        const query = { _id: addressId };

        await Address.findByIdAndUpdate(query, update, {new: true});

        res.status(200).json({
            success: true, 
            message: 'Address has been updated successfully'
        });

    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});


router.post('/add', auth, async (req, res) => {
    try {
        const user = req.user;

        const address = new Address({
            ...req.body,
            user: user._id
        });

        const addressDoc = await address.save();
        
        res.status(200).json({
            success: true,
            message: 'Address has been added successfully',
            address: addressDoc
        });

    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const addressId = req.params.id;
        const update = req.body;
        const query = { _id: addressId };

        await Address.findByIdAndUpdate(query, update, {
            new: true
        });

        res.status(200).json({
            success: true,
            message: 'Address has been updated successfully!'
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again'
        });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const address = await Address.deleteOne({ _id: req.params.id });

        res.status(200).json({
            success: true,
            message: 'Address has been deleted successfully',
            address
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again'
        });
    }
});

module.exports = router;