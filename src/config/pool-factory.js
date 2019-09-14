const mysql = require('mysql')

const pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '-Mur1lo-@',
    database: 'login'
})

console.log('Pool criado.')

pool.on('release', () => console.log('pool => conexão retornda'))


process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;