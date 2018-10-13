/**
|--------------------------------------------------
| You get an array of numbers, return the sum of all of the positives ones.
| 
| Example [1,-4,7,12] => 1 + 7 + 12 = 20
| 
| Note: if there is nothing to sum, the sum is default to 0.
|--------------------------------------------------
*/

const positiveSum = array => {
  if(array.filter(n => n >= 0).length > 0){
    return array.filter(n => n >= 0).reduce((a, b) => a + b)
  }
  return 0
}

console.log(positiveSum([-1,-4,-7,-12]))