const express = require('express');

const app = express();

app.use('/send', require('./routes/send'));

module.exports = { path: '/api', handler: app }
