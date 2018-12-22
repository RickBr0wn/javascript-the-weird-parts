/**
* create2dArray
*
* A function that returns a 2d Array, that can be visualized as a grid, with an X & Y axis
* eg: create2dArray(3)
* *  X, X, X,
* *  X, X, X
* *  X, X, X
*
* @param number - the size of the 'X' axis
* @param number - the size of the 'Y' axis
* @return array - an array that represents a grid 
*
*/
 const create2dArray = (x, y) => {
  const arr = []
  for(let i = 0; i < x; i++){
    for(let j = 0; j < y; j++ ){
      arr[i][j].push('X')
    }
  }
}

const arr = create2dArray(5)

console.log(arr)