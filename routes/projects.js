const express = require('express');
const router =  express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
    return res.redirect('/project/0');
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    const project = projects[+id];
    if (project) {
        res.locals.project = project;
        res.render('project');
    } else {
        const err = new Error(`There is no project with the id of ${id}...`)
        err.status = 404;
        next(err);
    }
})

module.exports = router;