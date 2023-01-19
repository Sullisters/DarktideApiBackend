const router = require('express').Router();
const meleeWeaponsRoutes = require('./meleeWeaponsController');
const tagsRoutes = require('./tagsController');
const classesRoutes = require('./classesController');

router.use('/meleeWeapons', meleeWeaponsRoutes);
router.use('/tags', tagsRoutes);
router.use('/class', classesRoutes);

module.exports = router;