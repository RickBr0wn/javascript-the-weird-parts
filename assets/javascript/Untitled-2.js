function convertFrac(lst) {
  // array consists of [ [numer_, denom_], [numer_, denom_], [numer_, denom_] ]
  let highestDemoninator = 0; //?
  let mulitplier = 0; //?

  // loop through the array
  for (let i = 0; i < lst.length; i++) {
    // find the highest denom_
    if (Math.max(...lst[i]) > highestDemoninator) {
      highestDemoninator = Math.max(...lst[i]);
    }
  }

  highestDemoninator; //?
  // highestDemoninator % lst[2][1]; //?

  // loop through the array again?
  for (let i = 0; i < lst.lenght; i++) {
    // divide the remaining into the highest
    if (highestDemoninator % lst[i][1] === 0) {
      // if all denom_ divide into the largest without remainder, store the mulitplier
      mulitplier = highestDemoninator
    }    
    // multiply the highest demon_ by the loop value [i] + 1
    highestDemoninator = highestDemoninator * 2;
  }
  console.log(mulitplier) //?

  // multiply all numer_ & denom_ by the multiplier

  // return the answer
  return mulitplier;
}

var lst = [[1, 2], [1, 3], [1, 4]];
console.log(convertFrac(lst), " => (6,12)(4,12)(3,12)");
