const express = require('express');
const router = express.Router();
const {
    Blessings,
    MeleeWeapons
} = require('../../models');

//Get all Blessing Info
router.get('/', async (req,res) => {
    try {
        const blessings = await Blessings.findAll({
            // attributes: [
            //     'id',
            //     'class'
            // ],
            // include: [{
            //     model: MeleeWeapons,
            //     attributes: [
            //         'name'
            //     ]
            // }]
        });
        res.status(200).json(blessings);
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "an error has occured", err });
    }
});

//Get one Blessing by ID
router.get('/:id', async (req,res) => {
    try {
        const blessings = await Blessings.findByPk(req.params.id, {
            // attributes: [
            //     'id',
            //     'class'
            // ],
            include: [{
                model: MeleeWeapons,
                attributes: [
                    'name'
                ]
            }]
        });
        res.status(200).json(blessings);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;