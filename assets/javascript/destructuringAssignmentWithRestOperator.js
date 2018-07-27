const source = [1,2,3,4,5,6,7,8,9,10]

const removeFirstTwo = (list) => {
  const [a, b, ...arr] = source
  return arr
}

const arr = removeFirstTwo(source)

console.log(arr) // should be [3,4,5,6,7,8,9,10]
console.log(source) // should be [1,2,3,4,5,6,7,8,9,10]