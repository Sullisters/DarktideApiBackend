const express = require('express');
const router = express.Router();
const {
    MeleeWeapons,
    Tags
} = require('../../models');

//Get all Tags
router.get('/', async (req,res) => {
    try {
        const tags = await Tags.findAll({
            include: [MeleeWeapons]
        });
        res.status(200).json(tags);
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: "an error has occured", err });
    }
});

//Get one Tag
router.get('/:id', async (req,res) => {
    try {
        const tags = await Tags.findByPk(req.params.id);
        res.status(200).json(tags);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;