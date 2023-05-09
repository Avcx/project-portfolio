const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('./public'));

const mainRoutes = require('./routes/index');
const projectRoute = require('./routes/projects');

app.use(mainRoutes);
app.use('/project', projectRoute);

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404);
        res.render('page-not-found', {error: err})
    } else {
        res.render('error', {error: err});
    }

})

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});