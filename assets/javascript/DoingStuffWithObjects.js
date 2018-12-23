let obj1 = {
  a: 1,
  b: 2,
  c: 3
}

let obj2 = {
  d: 4
}

const person = {
  isHuman: false,
  printIntroduction: function () {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`
  }
}

obj3 = Object.assign({}, obj1) //?

const newPerson = Object.create(person)
newPerson.name = 'Rick'
newPerson.isHuman = true
person.printIntroduction() //?
newPerson.printIntroduction() //?


const array = [
  ['foo', 'bar'],
  ['baz', 42]
]

Object.fromEntries = array => Object.assign({}, ...Array.from(array, ([key, value]) => ({
  [key]: value
})))

const obj = Object.fromEntries(array) //?
const objectEntries = Object.entries(obj1) //?
const objectEntries2 = Object.entries(obj) //?

#