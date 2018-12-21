/**
* A function that takes an `array` of non-negative `integers` and/or `strings`, and returns a new `array` with the `strings` removed.  
*   
* eg: - filter_list([1,2,'a','b']) returns [1,2]
*
* @param `array` - The array to be filtered
* @returns `array` - The filtered array minus all `strings`
*/
export const filter_list = (...args) => {
  return Array.from(args).concat.apply([], args).filter(item => typeof(item) !== 'string')
}

console.log((filter_list([1,'a','b',0,15]),[1,0,15]))