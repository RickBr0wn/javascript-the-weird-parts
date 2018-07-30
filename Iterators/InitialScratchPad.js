const dragons = [
  'cool dragon',
  'angry dragon',
  'nasty dragon'
]

const iterator = dragons[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for(const char of dragons[0]) {
  char
}

for(const dragon of dragons) {
  dragon
}