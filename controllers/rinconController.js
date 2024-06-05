const Player = require('../models/rinconModel');

exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPlayer = async (req, res) => {
    const player = new Player({
        name: req.body.name,
        age: req.body.age,
        position: req.body.position,
        team: req.body.team
    });
    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        player.name = req.body.name;
        player.age = req.body.age;
        player.position = req.body.position;
        player.team = req.body.team;
        const updatedPlayer = await player.save();
        res.json(updatedPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        await player.remove();
        res.json({ message: 'Player deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};