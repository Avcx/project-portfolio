const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
})