const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const { cowRouter } = require('./routes/cows.routes');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use('/cows', cowRouter);

app.get('/', (req, res) => {
  res.send('ready to go');
});

module.exports = {
  app,
};
