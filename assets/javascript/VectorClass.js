/**
* Vector Class
* @param `array` -
* @returns `array` -
*/
const Vector = function (components) {
  if (components === undefined || typeof components !== "object")
    throw "Error, components must be an array"
  const adder = (a, b) => a + b

  return {
    array: [...components],

    validated: function (passedArray) {
      if (passedArray === undefined || passedArray.array === undefined)
        throw "The array is undefined"
      if (passedArray.array.length === this.array.length) {
        return passedArray.array.sort()
      } else {
        throw "The Vectors must be of equal length"
      }
    },

    add: function (passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return new Vector(
        passedArray.map((item, idx) => (sum[idx] = this.array[idx] + item))
      )
    },

    subtract: function (passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return new Vector(
        passedArray.map((item, idx) => (sum[idx] = this.array[idx] - item))
      )
    },

    dot: function (passedArray) {
      passedArray = this.validated(passedArray)
      let sum = new Array()
      return passedArray
        .map((item, idx) => (sum[idx] = this.array[idx] * item))
        .reduce(adder)
    },

    norm: function () {
      console.log(this.array)
      console.log(this.array.map(item => Math.pow(item, 2)).reduce(adder))
      return this.array.map(item => Math.pow(item, 2)).reduce(adder)
    },

    toString: function () {
      return `(${this.array.toString()})`
    },

    equals: function (passedArray) {
      passedArray = this.validated(passedArray)
      let returnValue = true
      passedArray.map((item, idx) =>
        item != this.array[idx] ? (returnValue = false) : null
      )
      return returnValue
    }
  }
}

const a = new Vector([1, 2]) //?
const b = new Vector([3, 4]) //?
const c = new Vector([3, 4, 5]) //?

a.add(b) //?
b.subtract(a) //?
a.dot(b) //?
c.norm() //?
a.toString() //?
a.equals(b) //?
unknown