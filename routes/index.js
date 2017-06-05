const route = require('express').Router()
const article_controller = require('../controllers/article_controller')

route.get('/article', article_controller.getAll)
route.get('/article/:id', article_controller.getOne)
route.post('/article', article_controller.insert)
route.put('/article/:id', article_controller.update)
route.delete('/article/:id', article_controller.delete)

module.exports = route
