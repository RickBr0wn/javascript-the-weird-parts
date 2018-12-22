let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let letters = ["a", "b", "c", "d", "e"];
let dummy = [11, 2, 3, 4, 5];
let anArrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const max = Math.max(...numbers); //?

const isBelowTen = value => value < 10;
const isString = value => typeof value === "string";
letters.every(isString); //?
dummy.every(isBelowTen); //?

const newArray = Array(...numbers); //?
const anotherNewArray = Object.assign([], numbers); //?

numbers.concat(dummy); //?

numbers.copyWithin(0, 4, 5); //?
numbers = [1, 2, 3, 4, 5, 6, 7, 8];

numbers; //?

const iterator = numbers.entries(); //?
iterator.next().value; //?
iterator.next().value; //?
iterator.next().value; //?
iterator.next().value; //?
iterator.next().value; //?
iterator.next().value; //?

// *important* Array.prototype.fill() always muatates the array
const starredNumbers = numbers.fill("*"); //?
const starredPortion = numbers.fill("*", 1, 2); //?
numbers = [1, 2, 3, 4, 5, 6, 7, 8];

Array.isArray(numbers); //?

for (let number in numbers) {
  console.log(numbers[number]);
}

function greaterThanFive(element, index, array) {
  return element > 5;
}

numbers; //?
// This callback below has the 3 params (element, index, array)
numbers.find(greaterThanFive); //?
numbers.includes(5); //?
numbers.indexOf(5); //?

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

numbers; //?
numbers.find(isPrime); //?
numbers.findIndex(isPrime); //?

const otherIterator = numbers.keys(); //?
for (let key of otherIterator) {
  console.log(key);
}
