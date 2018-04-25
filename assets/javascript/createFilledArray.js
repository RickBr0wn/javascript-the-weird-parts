const createFilledArray = n => {
    let myArray = Array.apply(null, Array(n))
    return myArray.map((element, index) => {return index})
}