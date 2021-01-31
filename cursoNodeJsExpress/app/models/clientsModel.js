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

  this.save = function (data, renderData) {

    const con = db()
    return con.query('insert into clientes set ?', data, renderData)

  }

  return this
}