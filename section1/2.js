function solution(a, b, c){
    let answer, max;
    let total = a+b+c;
    
    if(a > b) max = a;
    else max = b;

    if(max < c) max = c;

    if((total-max) > max)
        answer = "yes";
    else
        answer = "no";
    
    return answer;
}

console.log(solution(13,33,17));