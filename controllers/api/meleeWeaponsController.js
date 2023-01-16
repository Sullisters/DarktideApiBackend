const express = require('express');
const router = express.Router();
const { MeleeWeapons } = require('../../models');

//Get all Melee Weapons
router.get('/', async (req,res) => {
    try {
        const meleeWeapons = await MeleeWeapons.findAll();
        res.status(200).json(meleeWeapons);
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "an error has occured", err });
    }
});

//Get one Melee Weapon
router.get('/:id', async (req,res) => {
    try {
        const meleeWeapons = await MeleeWeapons.findByPk(req.params.id);
        res.status(200).json(meleeWeapons);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;