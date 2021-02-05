const items = [
  { name: 'Bike' , price: 300},
  { name: 'Book' , price: 10},
  { name: 'Tv' , price: 1020},
  { name: 'Computer' , price: 1200},
]

// filter
// retorna um array com o resultado da busca
const filteredItens = items.filter((item) => {
  return item.price >= 200
})

console.log(items)
console.log(filteredItens)

//map
//retorna os valores da chave especificada
const itemsNames = items.map((item) => {
  return item.name
})

console.log(itemsNames)

//find
//busca dentro do array
//retorna o valor encontrado
const bike = items.find((item) => {
  return item.name === 'Bike'
})

console.log(bike)

//for each
// executa algo para cada item do array
items.forEach((item) => {
  console.log(item.name)
})

//some
//verifica se pelomenos 1 dos itens do array 
// batem com a expressão passada
// retorna um boolean
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 200
})

console.log(hasInexpensiveItems)


//every
//verifica se todos os itens do array 
// batem com a expressão passada
// retorna um boolean
const isEveryitemExpensive = items.every((item) => {
  return item.price >= 1100
})

console.log(isEveryitemExpensive)

//reduce
// executa algo para cada item do array
const total = items.reduce((currentTotal, item)=> {
  return item.price + currentTotal
}, 0)

console.log(total)

//includes
// verifica se o array tem o valor passado
//retorna um boolean
const arr = [1,2,3,4]

const includesTwo = arr.includes(2)
console.log(includesTwo)