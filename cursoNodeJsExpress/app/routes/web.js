const clientModel = require('../models/clientsModel')() 

module.exports = function (app) {
  app.get('/', function (request, response) {
    const clientList = clientModel.all()
    response.render('site/home', {clients:clientList})
    console.log(clientModel.all())
    
  })

  app.get('/contato', function (request, response) {
    response.render('site/contato')

  })  
}