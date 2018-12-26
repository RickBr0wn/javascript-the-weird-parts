/**
* A function that accepts an `array` of `integers` and returns a new `array` containing the factorial values of the original array
*
* @param `array` - An array containing integers
* @returns `array` - An array containing the factorial values of the elements in the original array
*/
export function getFactorials(nums) {
  return Array.from(nums).map(function factorializeSingleNumber(num) {
    if (num == 0 || num == 1) return 1
    else return num * factorializeSingleNumber(num - 1)
  })
}

getFactorials([3, 4, 5]) //?
