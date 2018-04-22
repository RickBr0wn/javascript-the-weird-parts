function sym() {
    let args = Array.from(arguments);
    console.log(args.reduce(testForDifference));
    return args.reduce(testForDifference);
}

function testForDifference(arrayOne, arrayTwo){
    let answer = new Array();

    arrayOne.forEach(function(item){
        if(arrayTwo.indexOf(item) < 0 && answer.indexOf(item) < 0){
            answer.push(item);
        }
    });

    arrayTwo.forEach(function(item){
        if(arrayOne.indexOf(item) < 0 && answer.indexOf(item) < 0){
            answer.push(item);
        }
    });
    return answer;
}
 
sym([1, 2, 3], [5, 2, 1, 4]);
  