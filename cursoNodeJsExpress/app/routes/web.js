const clientController = require('../controllers/clientController')

module.exports = function (app) {
  app.get('/', function (request, response) {
    clientController.index(request, response)
  })

  app.get('/contato', function (request, response) {
    response.render('site/contato')

  })  
}