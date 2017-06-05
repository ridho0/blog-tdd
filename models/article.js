const mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
  title: String,
  content: String
})

let articles = mongoose.model('articles', articleSchema)

module.exports = articles
