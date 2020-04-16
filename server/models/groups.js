const mongoose = require('mongoose')


const groupSchema = new mongoose.Schema({

  name: String,
  time: String,
  location: String,
  description: String,
  days: Array,
  tags: Array,
  members: Array,
  owner: String,
  thumbnail: String,

});

const Groups = mongoose.model('Groups', groupSchema)
module.exports = Groups