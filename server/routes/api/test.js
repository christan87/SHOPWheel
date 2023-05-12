const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Test Succeeded!')
});

module.exports = router;