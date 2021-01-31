const clientModel = require('../models/clientsModel')() 

module.exports = function (app) {
  app.get('/', function (request, response) {
    clientModel.all(function (error, result) {
      response.render('site/home', { clients: result })
    })
    
    
  })

  app.get('/contato', function (request, response) {
    response.render('site/contato')

  })  
}