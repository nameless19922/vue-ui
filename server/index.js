const express = require('express');
const bodyParser = require('body-parser');
const { getRouter } = require('./utils');
const feedbackController = require('./controllers/feedback');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/send', getRouter({
  '/': feedbackController.index
}));

module.exports = { path: '/api', handler: app };
