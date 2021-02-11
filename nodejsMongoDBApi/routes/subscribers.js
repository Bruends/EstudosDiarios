const express = require('express')
const router = express.Router()

//Routes
//todos
router.get('/', (request, response) => {
  response.send('We are on home')
})

//um
router.get('/:id', (request, response) => {
  response.send(request.params.id)
})

//criar 
router.post('/', (request, response) => {
  response.send()
})

//modificar
router.patch('/:id', (request, response) => {
  response.send()
})

//deletar
router.delete('/:id', (request, response) => {
  response.send()
})

module.exports = router