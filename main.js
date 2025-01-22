const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors for CORS handling
const gameFunctions = require('./jobs/gameFunctions');
const Player = require('./models/player');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all origins (or specify an origin like 'http://localhost:3002')
app.use(cors());

// MongoDB connection string with the database name 'cookie-clicker'
mongoose.connect('mongodb+srv://manojshakya54:VV2F0ZbarJSRpstc@cluster0.htdtk.mongodb.net/cookie-clicker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());

// Endpoint to get player's data
app.get('/api/player', async (req, res) => {
  let player = await Player.findOne();

  // If no player data exists, create one
  if (!player) {
    player = new Player({
      score: 0,
      prizesWon: 0
    });
    await player.save();
  }

  res.json(player);
});

// Endpoint to handle button click
app.post('/api/click', async (req, res) => {
  let player = await Player.findOne();

  // If no player data exists, create one
  if (!player) {
    player = new Player({
      score: 0,
      prizesWon: 0
    });
    await player.save();
  }

  const result = gameFunctions.handleClick(player);
  await player.save(); // Save the updated player data
  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

