const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = mongoose.model('Player', playerSchema);