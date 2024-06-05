const express = require('express');
const router = express.Router();
const Player = require('../models/playerModel');

router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: 'Jugador no encontrado' });
    }
    res.json(player);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;