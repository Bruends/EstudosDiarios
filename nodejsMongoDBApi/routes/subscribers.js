const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Routes
//todos
router.get('/', async (request, response) => {
  try {
    const subs = await Subscriber.find()
    response.json(subs)

  } catch (err){
    response.status(500).json({message: err.message})

  }  
})

//um
router.get('/:id', getSubFromDb, (request, response) => {
  response.json(response.sub)
})

//criar 
router.post('/', async (request, response) => {
  // usando schema do mongoose
  const sub = new Subscriber({
    name: request.body.name,
    subTo: request.body.subTo,
    date: request.body.date
  })

 try {
    const subs = await sub.save()
    response.status(201).json(subs)

  } catch (err){
    response.status(400).json({message: err.message})

  }  
})

//modificar
router.patch('/:id', getSubFromDb, async (request, response) => {
  if(request.body.name != null) {
    response.sub.name = request.body.name
  }

  if(request.body.subTo != null) {
    response.sub.subTo = request.body.subTo
  }

  try {
    const updatedSub = await response.sub.save()
    response.status(201).json(updatedSub)

  } catch (err){
    response.status(400).json({message: err.message})

  }

})

//deletar
router.delete('/:id', getSubFromDb, async (request, response) => {
  try {
    await response.sub.remove()
    response.status(201).json({message: 'success'})

  } catch (err){
    response.status(500).json({message: err.message})

  }  
})

async function getSubFromDb(request, response, next) {
  let sub
  try {
    sub = await Subscriber.findById(request.params.id)
    if (!sub) {
      return response.status(400).json({message: "cannot find"})
    }
  } catch(err) {
    return response.status(500).json({message: err.message})
  }

  response.sub = sub
  next()
}

module.exports = router