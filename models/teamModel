const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  titles: {
    type: Number,
    required: true
  },
  city: String
});

module.exports = mongoose.model('Team', teamSchema);