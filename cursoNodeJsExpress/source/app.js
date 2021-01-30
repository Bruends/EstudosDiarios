const express = require('express')

const app = express()

app.get('/', function(request, response){
  response.send(` 
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">      
      <title>Document</title>
    </head>
    <body>
      <h1> Pagina home </h1>
    </body>
    </html>
  `)
})

app.get('/contato', function (request, response) {
  response.send(` 
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">      
      <title>Document</title>
    </head>
    <body>
      <h1> Pagina contato </h1>
    </body>
    </html>
  `)
})


app.listen(8000, function(){
  console.log('servidor na porta 8000')
})