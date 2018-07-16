const increment = (function() {
  "use strict"
  return function increment2(number, value = 2) {
    return number + value
  }
})()
console.log(increment(5, 2)) // returns 7
console.log(increment(5)) // returns NaN