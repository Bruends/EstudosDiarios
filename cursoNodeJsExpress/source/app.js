const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', function(request, response){
  response.render('site/home')
})

app.get('/contato', function (request, response) {
  response.render('site/contato')
})


app.listen(8000, function(){
  console.log('servidor na porta 8000')
})