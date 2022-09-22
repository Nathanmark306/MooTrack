const express = require('express');
const { httpGetCows, httpPostCows } = require('./cows.controller');
const cowRouter = express.Router();

cowRouter.get('/', httpGetCows);
cowRouter.post('/', httpPostCows);
module.exports = {
  cowRouter,
};
