function sym() {
    let args = Array.from(arguments);
    console.log(args.reduce(testForDifference));
    return args.reduce(testForDifference);
}

const testForDifference = (arrayOne, arrayTwo) => {
    let answer = new Array();

    arrayOne.forEach(item => {
        if(arrayTwo.indexOf(item) < 0 && answer.indexOf(item) < 0){
            answer.push(item);
        }
    });

    arrayTwo.forEach(item => {
        if(arrayOne.indexOf(item) < 0 && answer.indexOf(item) < 0){
            answer.push(item);
        }
    });
    return answer;
}
 
sym([1, 2, 3], [5, 2, 1, 4]);
  