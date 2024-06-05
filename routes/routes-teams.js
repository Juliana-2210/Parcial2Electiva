const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');

router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (team == null) {
      return res.status(404).json({ message: 'Equipo no encontrado' });
    }
    res.json(team);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


module.exports = router;