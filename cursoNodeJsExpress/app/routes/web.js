module.exports = function (app) {
  app.get('/', function (request, response) {
    response.render('site/home')
  })

  app.get('/contato', function (request, response) {
    response.render('site/contato')

  })  
}