function solution(a){
    var i, answer = 0;

    for(i=0; i<=a; i++){
        answer += i;
    }
    return answer;
}

console.log(solution(10));