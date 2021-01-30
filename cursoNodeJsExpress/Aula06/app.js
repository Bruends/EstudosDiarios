const http = require('http')

const server = http.createServer(function(request, response){
  const page = request.url
  console.log(page)

  if(page === '/contato') {
    response.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">      
      <title>Document</title>
    </head>
    <body>
      <h1> Pagina Contato </h1>
    </body>
    </html>  
  `)

  } else {
    response.end(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">      
      <title>Document</title>
    </head>
    <body>
      <h1> Pagina Home </h1>
    </body>
    </html>  
  `)
  }
  
});

console.log('localhost: 8000');
server.listen(8000)