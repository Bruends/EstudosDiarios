const mysql = require('mysql')

const con = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_node'
  })
}

module.exports = con