const { Router } = require('express')
const userController = require('./controllers/userController')


const routes = Router()

routes.post('/users', userController.selectUser)
routes.post('/userbyid', userController.selectUserId)
routes.post('/register', userController.insertRegisterUser)


module.exports = routes