module.exports = function () {
  const express = require('express')

  const app = express()
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  const routes = require('../app/routes/web')
  routes(app)

  const port = 5500

  app.listen(port, function () {
    console.log('servidor na porta: ' + port)

  })
}