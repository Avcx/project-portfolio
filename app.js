const express = require('express');
const app = express();
const mainRoutes = require('./routes/index');

app.set('view engine', 'pug');
app.use('/static', express.static('./public'));

app.use(mainRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('', {error: err});
});

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});