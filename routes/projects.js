const express = require('express');
const router =  express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    res.redirect('/project/0');
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[+id];
    res.locals.project = project;
    res.render('project');
})

module.exports = router;