const db = require('../../config/db')

module.exports = function(){
  this.all = function(renderData){
    
    const con = db()        
    return con.query('select * from clientes', renderData)

  }

  this.find = function (id, renderData) {

    const con = db()
    return con.query('select * from clientes where id = ?', id, renderData)

  }

  return this
}