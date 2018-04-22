function makeArrayConsecutive2(statues) {
    statues.sort((a, b) => a - b);
    console.log(statues);
    let first  = statues[0];
    let last = statues.slice(-1)[0];
    let answerArray = new Array;
    let answer = 0;
    
    statues.forEach((element, index) => {
        if(statues[index] > 10){
            let switched = statues.splice(0, 1);
            statues.push(switched[0]);
        }   
    });
    
    for(let i = first; i < last; i++){
        if(statues.indexOf(i) < 0 && answerArray.indexOf(i) < 0){
            answerArray.push(i);
        }
    }
    answer = answerArray.length;
    console.log(answer);
    return answer;
}

makeArrayConsecutive2([4, 2, 7, 18]);
