const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  score: { type: Number, default: 0 },
  prizesWon: { type: Number, default: 0 },
});

module.exports = mongoose.model('Player', playerSchema);


