const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'curso_node'
})



module.exports = function(){
  this.all = function(){

    con.query('select * from clientes', function (error, result) {
      console.log(result)
      
    })

    return [
      { nome: "bruno", email: "bru@email.com"}
    ]
  }

  return this
}