const user = require('../databaseDAO/userDao')

module.exports = {
    selectUser(req, res, next) {
        
        req.connection.query('SELECT * FROM user', (err, user) => {
            if(err) return next(err)
            return res.json(user)
        })
    
    },

    selectUserId(req, res, next) {
        const {id} = req.body
        req.connection.query(`SELECT * FROM user WHERE idUser = ${id}`, (err, user) => {
            if(err) return next(err)
            return res.json(user)
        })
    },

    insertRegisterUser(req, res, next) {
        const { nome, senha } = req.body
        const sql = `INSERT INTO user VALUES(${null},'${nome}', '${senha}')`

        req.connection.query(sql, (err, result) => {
            if(err) return next(err)
            return res.send('User register sucess')
        })
    }
}