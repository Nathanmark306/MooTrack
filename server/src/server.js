const http = require('http');
const process = require('process');
const mongoose = require('mongoose');
const { app } = require('./app');
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
mongoose.connection.once('open', () => console.log('mongoDB is connected'));
mongoose.connection.on('error', (err) => console.error(err));
async function loadOnStart() {
  await mongoose.connect(
    'mongodb+srv://nasa-api:nasa@nasacluster.znbvauu.mongodb.net/?retryWrites=true&w=majority'
  );
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

loadOnStart();
