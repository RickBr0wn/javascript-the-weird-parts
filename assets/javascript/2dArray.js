const create2dArray = (length) => {
  const arr = []
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++ ){
      arr[i][j].push('X')
    }
  }
}

const arr = create2dArray(5)

console.log(arr)