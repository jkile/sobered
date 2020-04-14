const mongoose = require('mongoose')


const groupSchema = new mongoose.Schema({
  members: Array,
  owner: String,
  time: Date,
  location: String,
  name: String,
  thumbnail: String

});

const Groups = mongoose.model('Groups', groupSchema)
module.exports = Groups