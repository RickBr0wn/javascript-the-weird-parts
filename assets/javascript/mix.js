function lettersObjectCreator(string) {
  function mix(s1, s2) {
    return string
      .replace(/[^a-z]+/g, "")
      .trim()
      .split("")
      .reduce((accumulator, currentLetter) => {
        (accumulator[currentLetter] += 1) || (accumulator[currentLetter] = 1);
        return accumulator;
      }, {});
  }

  const arr1 = Object.entries(lettersObjectCreator(s1))
    .map(pair => Array(...pair[0], pair[1]))
    .filter(pair => pair[1] > 1)
    .sort(); //?

  const arr2 = Object.entries(lettersObjectCreator(s2))
    .map(pair => Array(...pair[0], pair[1]))
    .filter(pair => pair[1] > 1)
    .sort(); //?

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][1] === arr2[i][1]) {
      arr1.splice(i, 1);
      arr2.splice(i, 1);
    }
  }

  arr1; //?
  arr2; //?

  let tempAnswer = []
  let answer = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][1] > arr2[i][1]) {
      tempAnswer.push(arr1[i]);
    } else {
      tempAnswer.push(arr2[i]);
    }
  }

  tempAnswer; //?
  tempAnswer[0].length; //?

  for(let j = 0; j < tempAnswer.length; j++) {
    for (let i = 0; i < tempAnswer[0][1]; i++) {
      if (i === 0) {
        answer.push(j + 1)
      }
      if (i === (tempAnswer[j][1])) {
        answer.push(tempAnswer[j][1])
      }
      answer.push(tempAnswer[j][0])
    }
    answer.push('/')
  }

  return answer;
}

// expect "2:eeeee/2:yy/=:hh/=:rr"
// mix(
//   "my&friend&Paul has heavy hats! &",
//   "my friend John has many many friends &2"
// ); //?

// expect "1:aaaa/2:bbb"
mix("A ccc aaaa bb c", "& ccc aaa bbb c d") //?
