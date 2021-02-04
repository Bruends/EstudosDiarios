const array= [1,undefined,3,4,5,6,7,8]

const [one,,,, five, ...afterFive] = array
const [,two=2] = array 
const [,,,four] = array

console.log(one)
console.log(two)
console.log(four)
console.log(five)
console.log(afterFive)

const person = {
  name: 'Bruno',
  age: 24
}

const { name:personName, age } = person
console.log(`${personName} is ${age} yrs old`)