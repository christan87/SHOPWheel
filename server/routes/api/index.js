const router = require('express').Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const addressRoutes = require('./address');

// auth routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/address', addressRoutes);

module.exports = router;