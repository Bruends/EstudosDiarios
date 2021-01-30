module.exports = function () {
  const express = require('express')

  const app = express()
  app.set('view engine', 'ejs')
  app.set('views', './app/views')

  const routes = require('../app/routes/web')
  routes(app)

  app.listen(5500, function () {
    console.log('servidor na porta 8000')

  })
}