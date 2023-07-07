const express = require('express');
const router = express.Router();
const multer = require('multer');
const Mongoose = require('mongoose');

//Bring in Models & Utils

const Product = require('../../models/product');
const Brand = require('../../models/brand');
const Category = require('../../models/category');
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const checkAuth = require('../../utils/auth');
const { s3Upload } = require('../../utils/storage');
const {
    getStoreProductsQuery,
    getStoreProductsWishListQuery
} = require('../../utils/queries');
const { ROLES } = require('../../constants');
const product = require('../../models/product');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Fetch Products
router.get('/', auth, role.check(ROLES.Admin, ROLES.Merchant), async (req, res) => {
    try {
        let products = [];

        if(req.user.merchant){
            const brands = await Brand.find({
                merchant: req.user.merchant
            }).populate('merchant', '_id');

            const brandId = brands[0]?.['_id'];

            products = await Product.find({}).populate({
                path: 'brand',
                populate: {
                    path: 'merchant',
                    model: 'Merchant'
                }
            }).where('brand', brandId);
        } else {
            products = await Product.find({}).populate({
                path: 'brand',
                populate: {
                    path: 'merchant',
                    model: 'Merchant'
                }               
            });
        }

        res.status(200).json({products});

    } catch (error) {
        res.status(404).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

// Fetch Product
router.get('/:id', auth, role.check(ROLES.Admin, ROLES.Merchant), async (req, res) => {
    try {
        const productId = req.params.id;
        let productDoc = null;
        if(req.user.merchant) {
            const brands = await Brand.find({
                merchant: req.user.merchant
            }).populate('merchant', '_id');
            
            const berandId = brands[0]['_id'];

            productDoc = await Product.findOne({ _id: productId }).populate({
                path: 'brand',
                select: 'name'
            }).where('brand', brandId);
        } else {
            productDoc = await Product.findOne({ _id: productId }).populate({
                path: 'brand',
                select: 'name'
            });
        }

        if(!productDoc) {
            return res.status(404).json({
                message: 'No product found'
            });
        }

        res.status(200).json({
            product: productDoc
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

// Update Product
router.put('/:id', auth, role.check(ROLES.Admin, ROLES.Merchant), async (req, res) => {
    try {
        const productId = req.params.id;
        const update = req.body.product;
        const query = { _id: productId };
        const { sku, slug } = req.body.product;

        const foundProduct = await Product.findOne({
            $or: [{ slug }, { sku }]
        });

        if(foundProduct && foundProduct._id !== productId){
            return res.status(400).json({
                error: 'Sku or slug is already in use.'
            })
        }

        await Product.findOneAndUpdate(query, update, { new: true });

        res.status(200).json({ success: true, message: 'Product has been successfully updated!' });

    } catch (error) {
        res.status(400).json({ error: 'Your request could not be processed. Please try again.' });   
    }
});

router.put('/:id/active', auth, role.check(ROLES.Admin, ROLES.Merchant), async (req, res) => {
    try {
        const productId = req.params.id;
        const update = req.body.product;
        const query = { _id: productId };

        await Product.findOneAndUpdate(query, update, { new: true });

        res.status(200).json({
            success: true,
            message: 'Product has been sucessfully updated!'
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
});

// Delete Product
router.delete('/delete/:id', auth, role.check(ROLES.Admin, ROLES.Merchant), async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id });

        res.status(200).json({
            success: true,
            message: 'Product has been sucessfully deleted!'
        });
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
});

module.exports = router;