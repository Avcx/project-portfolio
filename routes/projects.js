const express = require('express');
const router =  express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    const projectNum = req.params.id;
    res.render('project', {});
})

module.exports = router;