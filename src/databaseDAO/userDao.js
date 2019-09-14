class userDao {

    constructor(connection) {
        this.connection = connection
    }

    list() {
        return new Promise((req, res) => {
            this.connection.query('SELECT * FROM user', (err, user) => {
                if(err) return reject(err)
                resolve(user)
            })
        })
    }
}

module.exports = userDao