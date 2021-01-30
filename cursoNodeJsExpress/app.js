const app = require('./config/server')

app.get('/', function(request, response){
  response.render('site/home')
})

app.get('/contato', function (request, response) {
  response.render('site/contato')

})

app.listen(5500, function(){
  console.log('servidor na porta 8000')

})