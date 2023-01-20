const router = require('express').Router();
const meleeWeaponsRoutes = require('./meleeWeaponsController');
const tagsRoutes = require('./tagsController');
const classesRoutes = require('./classesController');
const subtypesRoutes = require('./subtypesController');
const blessingsRoutes = require('./blessingsController');

router.use('/meleeWeapons', meleeWeaponsRoutes);
router.use('/tags', tagsRoutes);
router.use('/class', classesRoutes);
router.use('/subtypes', subtypesRoutes);
router.use('/blessings', blessingsRoutes);

module.exports = router;