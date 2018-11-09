/**
|--------------------------------------------------
| 
| Welcome. In this kata, you are asked to square every digit of a number. 
| For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
| 
| Note: The function accepts an integer and returns an integer
| 
| Test.assertEquals(squareDigits(9119), 811181)
| 
|--------------------------------------------------
*/

const squareDigits = num => Number(Array.from(num.toString()).map(num => Math.pow(num, 2)).join(''))

squareDigits(9119)

console.log(squareDigits(9119))
console.log(typeof(squareDigits(9119)));