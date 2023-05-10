const router = ('express').Router();

const testRoutes = require('./test');

// Test Routes

router.use('/test', testRoutes);

module.exports = router;