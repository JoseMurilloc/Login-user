const express = require('express') 
const session = require('express-session')


const connectionMiddleware = require('./config/connection-middleware')
const pool = require('./config/pool-factory')

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(connectionMiddleware(pool))

app.use(session({
    'secret': '343ji43j4n3jn4jk3n',
    saveUninitialized: true,
    resave: false
}))

app.use('/api/', routes)

app.listen(3333, () => {
    console.log('Servidor no ar PORT:3333')
})