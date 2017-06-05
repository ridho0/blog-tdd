const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  username: String,
  password: String
})

let users = mongoose.model('users', userSchema)

module.exports = users
