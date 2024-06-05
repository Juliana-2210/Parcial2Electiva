const express = require('express');
const router = express.Router();
const rinconController = require('../controllers/rinconController');


router.get('/players', rinconController.getAllPlayers);
router.get('/players/:id', rinconController.getPlayerById);
router.post('/players', rinconController.createPlayer);
router.put('/players/:id', rinconController.updatePlayer);
router.delete('/players/:id', rinconController.deletePlayer);

module.exports = router;