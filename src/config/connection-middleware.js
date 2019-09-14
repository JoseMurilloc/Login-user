module.exports = poll => (req, res, next) => {

    poll.getConnection((err, connection) => {
        if(err) return next(err)
        console.log('pool => obteve conexão')
        // Adicionarmos a conexão na requisição
        req.connection = connection

        next()
        // Devolver a conexão para o pool.
        res.on('finish', () => req.connection.release())
    })

}