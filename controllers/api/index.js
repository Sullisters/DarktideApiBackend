const router = require('express').Router();
const meleeWeaponsRoutes = require('./meleeWeaponsController');
const tagsRoutes = require('./tagsController');

router.use('/meleeWeapons', meleeWeaponsRoutes);
router.use('/tags', tagsRoutes);

module.exports = router;