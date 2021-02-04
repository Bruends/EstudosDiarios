'use strict'

function whodis(){
  console.log(this)
}

const bruno = {
  name: 'bruno',
  whodis
}

bruno.whodis() // bruno
whodis() //global object. undefined no strict mode

const itsBruno = whodis.bind(bruno)

function Horse(name) {
  this.name = name,
  
  this.sayHello = function(){
    console.log(this.name)
  }
}

const myHorse = new Horse('Sebastian')

myHorse.sayHello()

//evitar arrow functions em methodos 


const jeff = {
  whodis: function() {
    console.log(this) 
  },

  butWhoamI: () => console.log(this) //global Object ou undefined
}

//bind, call, apply

function showAge(){
  return this.age
}

const brunoM = {
  age: 24
}

//bind
// cria uma função que executa a função showAge com o contexto this no objeto brunoM
const showBrunosAge = showAge.bind(brunoM)
showBrunosAge()

//CAll
// executa a função showAge com o contexto this no objeto brunoM
showAge.call(brunoM, 'idade: ')

//Aplly
// executa a função showAge com o contexto this no objeto brunoM
//passa parametros em um array
showAge.apply(bruno, ['params'])