const db = require('../../config/db')

module.exports = function(){
  this.all = function(){

    const con = db()
        
    con.query('select * from clientes', function (error, result) {
      console.log(result)
      
    })

    return [
      { nome: "bruno", email: "bru@email.com"}
    ]
  }

  return this
}