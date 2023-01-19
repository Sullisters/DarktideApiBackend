const express = require('express');
const router = express.Router();
const {
    MeleeWeapons,
    Class,
    Tags
} = require('../../models');

//Get all Class Info
router.get('/', async (req,res) => {
    try {
        const classes = await Class.findAll({
            attributes: [
                'id',
                'class'
            ],
            include: [{
                model: MeleeWeapons,
                attributes: [
                    'name'
                ]
            }]
        });
        res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "an error has occured", err });
    }
});

//Get one Class
router.get('/:id', async (req,res) => {
    try {
        const classes = await Class.findByPk(req.params.id, {
            attributes: [
                'id',
                'class'
            ],
            include: [{
                model: MeleeWeapons,
                attributes: [
                    'name'
                ]
            }]
        });
        res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;