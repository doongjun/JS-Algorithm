function solution(str) {
  answer = "";

  //풀이1
  /*
    for(let x of str){
        if(answer.indexOf(x) == -1){
            answer += x;
        }
    }*/

  //풀이2
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], i, str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

let str = "ksekkset";
console.log(solution(str));
