const clientModel = require('../models/clientsModel')() 

module.exports.index = function (request, response){
  clientModel.all(function (error, result) {
    response.render('site/home', { clients: result })
  }) 
} 

module.exports.store = function () {
  
}

module.exports.show = function(){

}