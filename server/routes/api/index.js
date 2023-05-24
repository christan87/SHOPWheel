const router = require('express').Router();

const testRoutes = require('./test');
const authRoutes = require('./auth');

// Test Routes
router.use('/test', testRoutes);

// auth routes
router.use('/auth', authRoutes);

module.exports = router;