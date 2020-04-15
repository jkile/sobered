const mongoose = require('mongoose')


const groupSchema = new mongoose.Schema({
  members: Array,
  owner: String,
  days: Array,
  location: String,
  name: String,
  thumbnail: String,
  tags: Array

});

const Groups = mongoose.model('Groups', groupSchema)
module.exports = Groups