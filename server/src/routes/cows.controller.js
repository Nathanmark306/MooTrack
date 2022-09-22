const { cows, addCows } = require('../model/cows.model');

function httpGetCows(req, res) {
  res.status(200).json(cows);
}

function httpPostCows(req, res) {
  const cow = req.body;
  addCows(cow);
  res.status(200).json(cow);
}

module.exports = {
  httpGetCows,
  httpPostCows,
};
