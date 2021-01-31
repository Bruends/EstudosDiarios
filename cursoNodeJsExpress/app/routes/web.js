const clientController = require('../controllers/clientController')

module.exports = function (app) {
  app.get('/', function (request, response) {
    clientController.index(request, response)
  })

  app.get('/contato', function (request, response) {
    response.render('site/contato')

  })  

  app.get('/detalhe/:id', function (request, response) {
    console.log(request.params.id)
    clientController.show(request, response)
  })
}