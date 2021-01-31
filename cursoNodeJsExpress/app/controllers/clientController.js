const clientModel = require('../models/clientsModel')() 

module.exports.index = function (request, response){
  clientModel.all(function (error, result) {
    response.render('site/home', { clients: result })
  }) 
} 

module.exports.store = function () {
  
}

module.exports.show = function (request, response){
  clientModel.find(request.params.id, function (error, result) {
    if(result[0] && !error){
      response.render('site/detalhe', { client: result[0] })
    } else {
      console.log('cliente não encontrado')
      response.redirect('/')
    }
    
  })
}