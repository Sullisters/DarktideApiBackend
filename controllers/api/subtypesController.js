const express = require('express');
const router = express.Router();
const {
    Subtypes,
    MeleeWeapons
} = require('../../models');

//Get all Subtypes
router.get('/', async (req,res) => {
    try {
        const subtypes = await Subtypes.findAll({
            include: [{
                model: MeleeWeapons
            }]
        });
        res.status(200).json(subtypes);
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "an error has occured", err });
    }
});

//Get one Melee Weapon
router.get('/:id', async (req,res) => {
    try {
        const subtypes = await Subtypes.findByPk(req.params.id, {
            include: [{
                model: MeleeWeapons
            }]
        });
        res.status(200).json(subtypes);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;