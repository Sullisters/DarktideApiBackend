const router = require('express').Router();
const meleeWeaponsRoutes = require('./meleeWeaponsController');

router.use('/meleeWeapons', meleeWeaponsRoutes);

module.exports = router;