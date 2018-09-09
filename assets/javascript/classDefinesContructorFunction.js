function makeClass() {
  class Vegetable {
    constructor(vegetable) {
      this.name = vegetable
    }
  }
  return Vegetable
}
const Vegetable = makeClass()
const carrot = new Vegetable('carrot')

console.log(carrot.name) // => should be 'carrot'