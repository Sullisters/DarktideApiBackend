const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

//Home route
router.get('/', (req,res) => {
    res.send('Homepage')
})

//User routes
router.use('/api',apiRoutes);

module.exports = router;