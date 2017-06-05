const route = require('express').Router()
const article_controller = require('../controllers/article_controller')
const user_controller = require('../controllers/user_controller')

route.get('/article', article_controller.getAll)
route.get('/article/:id', article_controller.getOne)
route.post('/article', article_controller.insert)
route.put('/article/:id', article_controller.update)
route.delete('/article/:id', article_controller.delete)

route.get('/user', user_controller.getAll)
route.get('/user/:id', user_controller.getOne)
route.post('/user', user_controller.insert)
route.put('/user/:id', user_controller.update)
route.delete('/user/:id', user_controller.delete)

module.exports = route
