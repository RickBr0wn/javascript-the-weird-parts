function sym() {
    let args = Array.from(arguments)
    console.log(args)
    console.log(args.reduce(testForDifference))
    return args.reduce(testForDifference)
  }
  
  const testForDifference = (arrayOne, arrayTwo) => {
    let answer = new Array()
  
    // .indexOf will return -1 if the item is NOT in the array, or its index (0 or over) if it is present
    arrayOne.forEach(item => {
      if(arrayTwo.indexOf(item) < 0 && answer.indexOf(item) < 0){
          answer.push(item)
      }
    })
  
    arrayTwo.forEach(item => {
      if(arrayOne.indexOf(item) < 0 && answer.indexOf(item) < 0){
          answer.push(item)
      }
    })
    return answer
  }
  
  sym([1, 2, 3], [5, 2, 1, 4])
  